import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Coin } from "../hooks/useBalanceStore";
import { TOKEN_INFO, TokenInfo } from "../constants/tokens";

export async function UpdateBalances(wallet: Wallet, old_balances: Array<Coin>): Promise<Array<Coin>> {
        let balances: Array<Coin> = [];
        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/cosmos/bank/v1beta1/balances/${wallet.wallet.bech32Address}?pagination.limit=1000`)
                let balanceJson = await res.json()
                let balanceArray = balanceJson.balances;
                balanceArray.map((token: any) => {
                        balances.push({amt: token.amount, denom: token.denom})
                })
        } catch(e) {
                return old_balances;
        }
        return balances
}

export function GetInfoFromTokenInfo(denom: string): TokenInfo {
        let token = TOKEN_INFO.find((token) => denom == token.Denom)
        if (token === undefined) {
            token = {
                Denom: "",
                Base: "",
                Network: "",
                Logo: "",
                Decimals: 0
            }
        }
        return token
}

export async function GetPriceByDenom(denom: string): Promise<number> {
        var price = await fetch(QUBE_TESTNET_INFO.rest + `/core/oracle/v1beta1/denoms/${denom}/exchange_rate`)
        var pricejson = await price.json()
        return Number(pricejson.exchange_rate)
}