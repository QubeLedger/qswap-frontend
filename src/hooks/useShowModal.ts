import { createStore } from './store';

interface Show {
  b: boolean;
}

interface ShowTxModal {
  b: boolean;
  status: string;
  isPending: boolean;
}

const defaultState: Show = { b: false };
const defaultStateTxModal: ShowTxModal = { b: false, status: "", isPending: false };

export const [useShowModalFrom] = createStore(defaultState);
export const [useShowModalTo] = createStore(defaultState);
export const [useShowWalletModal] = createStore(defaultState);
export const [useShowModalSwapFrom] = createStore(defaultState);
export const [useShowModalSwapTo] = createStore(defaultState);
export const [useShowModalSwapTransaction] = createStore(defaultState);
export const [useShowAlert] = createStore(defaultState);
export const [useShowTransactionModalSwap] = createStore(defaultStateTxModal);