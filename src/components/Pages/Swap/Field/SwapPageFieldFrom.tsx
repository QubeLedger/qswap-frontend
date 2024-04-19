import styled from "styled-components";
import { SwapPageMAXButton } from "../../../Buttons/PageButtons/SwapPage/SwapPageMAXButton";
import { SwapPageModalFrom } from "../../../Modal/PageModal/SwapPage/SwapPageModalFrom";
import { SwapPageInput } from "./SwapPageInput";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useAmountIn, useAmountOut } from "../../../../hooks/useAmountInStore";
import { useTokenBalanceStore, TokenBalance } from "../../../../hooks/useBalanceStore";
import { toFixed } from "../../../../constants/utils";
import { GetRouteByTokenAToTokenB } from "../../../../web3/routes";
import { usePoolMetadata, useRoutes } from "../../../../hooks/usePoolMetadata";
import { useEffect } from "react";

const Field = styled.div <{BorderField: string, FieldBg: string}>`
    width: 100%;
    height: 120px;
    border: ${props => props.BorderField};
    border-radius: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.FieldBg};
`

const Avaible = styled.div`
    width: 100%;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
`

const AvaibleText = styled.a`
    font-size: 13px;
    color: #888888;
    font-weight: 500;
    margin-left: auto;
    margin-right: 5px;
`

const AvaibleDollar = styled.a`
    font-size: 15px;
    color: #888888;
    font-weight: 500;
    margin-left: 30px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`



export const SwapPageFieldFrom = () => {
        
    const [theme, setTheme] = useToggleTheme()
    const [amountIn, setAmountIn] = useAmountIn()
    const [amountOut, setAmountOut] = useAmountOut()
    const [tokenBalances, setTokenBalanceStore] = useTokenBalanceStore();
    const [routes, setRoutes] = useRoutes();
    const [pools, setPools] = usePoolMetadata()

    useEffect(() => {
        setRoutes(GetRouteByTokenAToTokenB(pools, amountIn.denom, amountOut.denom))
    }, [amountIn, amountOut, routes])

    let balance = tokenBalances.find((tokenBalance) => tokenBalance.Display == amountIn.base) as TokenBalance

    return(
        <Field FieldBg={theme.FieldBg} BorderField={theme.BorderField}>
            <Container>
                <SwapPageInput/>
                <SwapPageModalFrom/>
            </Container>
            <Avaible>
                <AvaibleDollar>${toFixed((isNaN(Number(amountIn?.amt))? 0 : Number(amountIn?.amt)) * (isNaN(Number(balance?.Price))? 1 : Number(balance?.Price)), 2)}</AvaibleDollar>
                <AvaibleText>{toFixed(isNaN(Number(balance?.Amount))? 0 : Number(balance?.Amount), 3)} {amountIn.base}</AvaibleText>
                <SwapPageMAXButton/>
            </Avaible>
        </Field>
    )
}