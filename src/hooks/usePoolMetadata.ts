import { createStore } from './store';

export interface PoolMetadata {
        ID: string
        tick: number
        fee: number
        pairID: {
                token0: string
                token1: string
        }
}


const defaultState: Array<PoolMetadata> = [];
const defaultStateForRoutes: Array<string> = [];

export const [usePoolMetadata] = createStore(defaultState);
export const [useRoutes] = createStore(defaultStateForRoutes);