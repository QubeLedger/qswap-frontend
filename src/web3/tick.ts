import { QUBE_TESTNET_INFO } from "../constants";

export async function GetTickByTokenATokenB(tokenA: string, tokenb: string): Promise<number> {
        try {
                let res = await fetch(QUBE_TESTNET_INFO.indexer + `/timeseries/price?tokenA=${tokenA}&tokenB=${tokenb}&resolution=seconds`)
                let resJson = await res.json()
                return Number(resJson.data[0][1][3])
        } catch(e) {
                return 0;
        }
}

export function CalculatePriceByTick(tick: number): number {
        if (tick < 0) {
                return 1.0001 ** (-1 * tick)
        } else {
                return 1 / (1.0001 ** (tick))
        }
}