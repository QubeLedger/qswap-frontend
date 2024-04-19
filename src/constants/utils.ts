import { useEffect, useState } from "react";
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

export function GetBaseByDenom(denom: string): string {
        let token = TOKEN_INFO.find((token) => token.Denom == denom)
    
        return String(token?.Base)
}

export function useDebounce(delay = 350) {
        const [search, setSearch] = useState(null);
        const [searchQuery, setSearchQuery] = useState(null);
      
        useEffect(() => {
          const delayFn = setTimeout(() => setSearch(searchQuery), delay);
          return () => clearTimeout(delayFn);
        }, [searchQuery, delay]);
      
        return [search, setSearchQuery];
}