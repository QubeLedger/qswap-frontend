import { createStore } from './store';
import ATOMLogo from "../assets/svg/AtomLogo.webp"
import QUBELogo from "../assets/svg/QubeLogo.webp"
import { TOKEN_INFO } from '../constants';

export interface AmountIn {
        amt: string;
        base: string;
}

export interface AmountWithLogo {
        amt: string;
        base: string;
        logo: string;
        denom: string;
}

interface Value {
        value: string
}

const defaultValue: Value = {
        value: ""
}

const defaultState: AmountIn = { 
        amt: "", 
        base: ""
};


const defaultAmountInWithLogo: AmountWithLogo = { 
        amt: "",
        base: "ATOM",
        logo: ATOMLogo,
        denom: String(TOKEN_INFO.find(token => token.Base == "ATOM")?.Denom),
};

const defaultAmountOutWithLogo: AmountWithLogo = { 
        amt: "",
        base: "QUBE",
        logo: QUBELogo,
        denom: String(TOKEN_INFO.find(token => token.Base == "QUBE")?.Denom),
};

export const [useAmountIn] = createStore(defaultAmountInWithLogo);
export const [useAmountOut] = createStore(defaultAmountOutWithLogo);
export const [useValue] = createStore(defaultValue);
