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
    font-weight: 500;
    font-size: 15px;
`

const InfoBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
            <InfoBlock>
                <Info>Price: </Info>
                <Info>1 {amountIn.base} = {toFixed(CalculatePriceByTick(tick), 4)} {amountOut.base}</Info>
            </InfoBlock>
            <InfoBlock>
                <Info>Slippage: </Info>
                <Info>0.2%</Info>
            </InfoBlock>
            {/*<Info>Route: {amountIn.base} {"->"} {amountOut.base}</Info>*/}
        </Cotainer>
    )
}