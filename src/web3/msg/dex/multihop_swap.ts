import { TOKEN_INFO } from "../../../constants";
import { AmountWithLogo } from "../../../hooks/useAmountInStore";
import { Wallet } from "../../../hooks/useWallet";
import { 
        typeUrlMsgMultiHopSwap,
        MultiHopRoute,
        MsgMultiHopSwap,
} from "../../../constants/cosmos/proto/dex/tx";

interface Msg {
        typeUrl: string
        value: any
}


export function MakeMultihopMsg(amtIn: AmountWithLogo, wallet: Wallet, route: Array<string>, exitLimitPrice: string): Msg {
        
        let denom = TOKEN_INFO.find((token) => token.Base == amtIn.base)
        let routes: Array<MultiHopRoute> = []

                routes[0] = <MultiHopRoute>{hops: route}

        let Msg: MsgMultiHopSwap = {
                creator: wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32Address : "",
                receiver: wallet.init == true && wallet.type == "keplr"? wallet.wallet.bech32Address : "",
                amountIn: (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)).toFixed(0),
                routes: routes,
                exitLimitPrice: exitLimitPrice,
                pickBestRoute: true,
        };

        let msg: Msg = {
            typeUrl: typeUrlMsgMultiHopSwap,
            value: Msg,
        };

        return msg
}
