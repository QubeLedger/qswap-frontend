import { createStore } from './store';


export interface Coin {
        amt: string;
        denom: string;
}

export interface Coins {
        coins: Coin[]
}

export interface TokenBalance {
        Display: string,
        Logo: string,
        Amount: number,
        Price: number,
}

const defaultState: Coin = { amt: "0", denom: "" };
const defaultStateBalances: Array<Coin> = [];
const defaultStateTokenBalances: Array<TokenBalance> = [];


export const [useBalanceStore] = createStore(defaultState);
export const [useBalancesStore] = createStore(defaultStateBalances);
export const [useTokenBalanceStore] = createStore(defaultStateTokenBalances);