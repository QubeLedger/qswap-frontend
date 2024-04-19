import { Coin } from "../hooks/useBalanceStore";
import { TOKEN_INFO } from "./tokens";

export function toFixed(x: number, d: number) {
        if (!d) return x.toFixed(d); // don't go wrong if no decimal
        return x.toFixed(d).replace(/\.?0+$/, '');
}

export function getBalanceByToken(balances: Coin[], denom: string): number {
        let token = TOKEN_INFO.find((token) => token.Denom == denom)
        let balance = balances.find((b) => b.denom == denom)
    
        return (Number(balance?.amt) / 10 ** Number(token?.Decimals))
}