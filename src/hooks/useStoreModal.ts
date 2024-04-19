import { createStore } from './store';

interface Show {
  b: boolean;
}

const defaultState: Show = { b: false };

export const [useShowWalletModal] = createStore(defaultState);
export const [useShowAlert] = createStore(defaultState);