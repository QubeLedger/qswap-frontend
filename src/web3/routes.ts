import { QUBE_TESTNET_INFO } from "../constants";
import { PoolMetadata } from "../hooks/usePoolMetadata";
import { CalculatePriceByTick, GetTickByTokenATokenB } from "./tick";


export async function GetAllPool(): Promise<Array<PoolMetadata>>  {
        let pools: Array<PoolMetadata> = [];
        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/dex/v1beta1/pool_metadata?pagination.limit=1000`)
                let resJson = await res.json()
                let array = resJson.PoolMetadata
                array.map((pool: any) => {
                        pools.push(
                                {
                                        ID: pool.ID,
                                        tick: Number(pool.tick),
                                        fee: Number(pool.fee),
                                        pairID: {
                                                token0: pool.pairID.token0,
                                                token1: pool.pairID.token1,
                                        }
                                }
                        )
                })
        } catch(e) {
                return pools;
        }
        return pools
}

export function GetRouteByTokenAToTokenB(pools: Array<PoolMetadata>, tokenA: string, tokenB: string): Array<string> {
        let route: Array<string> = []

        let pair_tokenA_to_tokenB = pools.find((pool) => ((pool.pairID.token0 == tokenA) && (pool.pairID.token1 == tokenB) || (pool.pairID.token1 == tokenA) && (pool.pairID.token0 == tokenB)) )
        if(pair_tokenA_to_tokenB) {
                route = [tokenA, tokenB]
        } else {
                let pairs_tokenA = pools.filter((pool) => (pool.pairID.token0 == tokenA) || (pool.pairID.token1 == tokenA))
                pairs_tokenA.map((pair) => {
                        let opposite_token = pair.pairID.token0 == tokenA ? pair.pairID.token1 : pair.pairID.token0
                        let pairs_opposite_token = pools.filter((pool) => (pool.pairID.token0 == opposite_token) || (pool.pairID.token1 == opposite_token))
                        let pair_tokenA_to_tokenB = pairs_opposite_token.filter((pool) => pool.pairID.token0 == tokenB || pool.pairID.token1 == tokenB)
                        if (pair_tokenA_to_tokenB.length != 0) {
                                route = [tokenA, opposite_token, tokenB]
                        }
                })
        }

        return route
}

export async function GetOutAmountByRouteAndInput(route: Array<string>, amt: number): Promise<number> {
        let temp_out = amt

        for (let index = 0; index < route.length - 1; index++) {
                let tokenIn = route[index]
		let tokenOut = route[index+1]
                let tick = await GetTickByTokenATokenB(tokenIn, tokenOut);
                temp_out = temp_out * CalculatePriceByTick(tick)
        }

        return temp_out
}