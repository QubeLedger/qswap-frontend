import { createStore } from './store';

export interface LTU {
        val: number
}

const defaultState: LTU = { val: 0 };

export const [useLastTimeUpdate] = createStore(defaultState);