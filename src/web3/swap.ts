import { AmountIn, AmountWithLogo } from "../hooks/useAmountInStore";
import { Client } from "../hooks/useClient";
import { Wallet } from "../hooks/useWallet";
import { MakeMultihopMsg } from "./msg/dex/multihop_swap";

export async function MultihopSwap(amtIn: AmountWithLogo, wallet: Wallet, route: Array<string>, exitLimitPrice: string, client: Client): Promise<[string, string]> {
        try {
                let msg = await MakeMultihopMsg(amtIn, wallet, route, exitLimitPrice)
                if(client.init == true) {
                        const result = await client.client.signAndBroadcast(
                                client.accounts[0].address,
                                [msg],
                                "auto",
                        );
                        if (result.code !== undefined && result.code !== 0) {
                                console.log("Failed to send tx: " + result.log || result.rawLog);  
                                return ["Failed", ""]
                        } else {
                                console.log("Succeed to send tx:" + result.transactionHash);
                                return ["Succeed", result.transactionHash]
                        }
                }
        } catch(e) {
                console.log(e)
                return ["Error", ""]
        }
        return ["Error", ""]
}