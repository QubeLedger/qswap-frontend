import { createStore } from './store';

export interface Wallet {
        init: boolean;
        wallet: any;
        type: string;
}

export const defaultStateWallet: Wallet = { init: false, wallet: null, type: "" };

export const [useWallet] = createStore(defaultStateWallet);