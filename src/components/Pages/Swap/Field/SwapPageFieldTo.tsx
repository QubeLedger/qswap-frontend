import styled from "styled-components";
import { SwapPageModalTo } from "../../../Modal/PageModal/SwapPage/SwapPageModalTo";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { CalculatePriceByTick, GetTickByTokenATokenB } from "../../../../web3/tick";
import { useAmountIn, useAmountOut } from "../../../../hooks/useAmountInStore";
import { useEffect, useState } from "react";
import { toFixed } from "../../../../constants/utils";

const Field = styled.div <{BorderField: string, ToField: string}>`
    width: 100%;
    height: 70px;
    background: ${props => props.ToField};
    border: ${props => props.BorderField};
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    align-items: center;
`

const AmountOutInactive = styled.a `
    color: #888888;
    font-size: 25px;
    font-weight: 700;
    margin-left: 30px;
`

const AmountOutActive = styled.a `
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
    margin-left: 30px;
`

export const SwapPageFieldTo = () => {
            
    const [theme, setTheme] = useToggleTheme()
    const [amountIn, setAmountIn] = useAmountIn()
    const [amountOut, setAmountOut] = useAmountOut()
    const [tick, setTick] = useState(0)

    useEffect(() => {
        async function main() {
            let tick = await GetTickByTokenATokenB(amountIn.denom, amountOut.denom);

            setTick(tick)
        }
        main()
    }, [amountIn, amountOut])

    let AmountOutComponent;

    if (amountIn.amt == '' || amountIn.amt == '0' || isNaN(Number(amountIn.amt)) || Number(amountIn.amt) == 0) {
        AmountOutComponent = <AmountOutInactive>0</AmountOutInactive>
    } else {
        AmountOutComponent = <AmountOutActive>{toFixed(Number(amountIn.amt) * CalculatePriceByTick(tick), 4)}</AmountOutActive>
    }

    return(
        <Field ToField={theme.ToField} BorderField={theme.BorderField}>
            <>{AmountOutComponent}</>
            <SwapPageModalTo/>
        </Field>
    )
}