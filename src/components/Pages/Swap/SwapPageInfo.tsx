import { useEffect, useState } from "react";
import styled from "styled-components";
import { CalculatePriceByTick, GetTickByTokenATokenB } from "../../../web3/tick";
import { useAmountIn, useAmountOut } from "../../../hooks/useAmountInStore";
import { toFixed } from "../../../constants/utils";

const Cotainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`

const Info = styled.a`
    color: #BABABA;
    font-weight: 400;
    font-size: 15px;
`


export const SwapPageInfo = () => {
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

    return(
        <Cotainer>
            <Info>Price: 1 {amountIn.base} = {toFixed(CalculatePriceByTick(tick), 4)} {amountOut.base}</Info>
            <Info>Route: {amountIn.base} {"->"} {amountOut.base}</Info>
            <Info>Slippage: 0.2%</Info>
        </Cotainer>
    )
}