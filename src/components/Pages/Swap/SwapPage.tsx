import styled from "styled-components";
import { SwapPageHeader } from "../../Header/PageHeaders/SwapPageHeader";
import { SwapPageFieldFrom } from "./Field/SwapPageFieldFrom";
import { SwapPageFieldTo } from "./Field/SwapPageFieldTo";
import { SwapPageInfo } from "./SwapPageInfo";
import { SwapFieldButton } from "../../Buttons/PageButtons/SwapPage/SwapFieldButton";
import { SwapModalTransaction } from "../../Modal/PageModal/ModalTransaction/SwapPageTransaction/SwapModalTransaction";
import { useEffect } from "react";
import { useWallet } from "../../../hooks/useWallet";
import { TokenBalance, useBalancesStore, useTokenBalanceStore } from "../../../hooks/useBalanceStore";
import { GetInfoFromTokenInfo, GetPriceByDenom, UpdateBalances } from "../../../web3/balances";
import { useAmountIn, useAmountOut } from "../../../hooks/useAmountInStore";
import { useLastTimeUpdate } from "../../../hooks/useStoreUtils";

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
        margin-top: 35px;
    }
`



export const SwapPage = () => {
    const [tokenBalances, setTokenBalanceStore] = useTokenBalanceStore()
    const [wallet, setWallet] = useWallet();
    const [balances, setBalances] = useBalancesStore();
    const [amountIn, setAmountIn] = useAmountIn()
    const [amountOut, setAmountOut] = useAmountOut()

    useEffect(() => {
        async function update() {
            if (wallet.init == true && tokenBalances.length == 0) {
                let blns = await UpdateBalances(wallet, balances);
                setBalances(blns)
			}	

            let temp_tokenBalances = await Promise.all(balances.map(async(balance_token) => {
                let token = GetInfoFromTokenInfo(balance_token.denom)
                
                let temp_price = 0
                if (token.Base != ""){
                    temp_price = await GetPriceByDenom(token.Base)
                }
                let temp_tokenBalance: TokenBalance = {
                    Display: token.Base,
                    Amount: (Number(balance_token.amt) / 10 ** Number(token.Decimals)),
                    Logo: token.Logo,
                    Price: isNaN(temp_price) ? 1 : temp_price
                }
                return temp_tokenBalance
            }))

            temp_tokenBalances = temp_tokenBalances.filter((e) => e.Display != "")

            temp_tokenBalances.sort(function(a, b) {
                return (b.Amount * b.Price) - (a.Amount * a.Price)
            });
        
            setTokenBalanceStore(temp_tokenBalances)

		}
		update()
    }, [balances, tokenBalances, wallet, amountIn, amountOut])
    
    return(
        <Container>
            <SwapPageHeader/>
            <SwapPageFieldFrom/>
            <SwapFieldButton/>
            <SwapPageFieldTo/>
            <SwapPageInfo/>
            <SwapModalTransaction/>
        </Container>
    )
}