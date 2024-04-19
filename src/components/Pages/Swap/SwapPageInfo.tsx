import { useEffect, useState } from "react";
import styled from "styled-components";
import { CalculatePriceByTick, GetTickByTokenATokenB } from "../../../web3/tick";
import { useAmountIn, useAmountOut } from "../../../hooks/useAmountInStore";
import { GetBaseByDenom, toFixed } from "../../../constants/utils";
import { GetRouteByTokenAToTokenB } from "../../../web3/routes";
import { usePoolMetadata, useRoutes } from "../../../hooks/usePoolMetadata";

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
    const [pools, setPools] = usePoolMetadata();
    const [routes, setRoutes] = useRoutes()

    useEffect(() => {
        async function main() {
            let tick = await GetTickByTokenATokenB(amountIn.denom, amountOut.denom);

            setTick(tick)
        }
        main()
    }, [amountIn, amountOut])

    let route_string = "No route"
    for (let index = 0; index < routes.length; index++) {
        if(route_string == "No route") {
            route_string = ""
            route_string += GetBaseByDenom(routes[index])
        } else {
            route_string += `-> ${GetBaseByDenom(routes[index])}`
        }
        
    }

    return(
        <Cotainer>
            <InfoBlock>
                <Info>Route: </Info>
                <Info>{route_string}</Info>
            </InfoBlock>
            <InfoBlock>
                <Info>Slippage: </Info>
                <Info>0.2%</Info>
            </InfoBlock>
            {/*<InfoBlock>
                <Info>Price: </Info>
                <Info>1 {amountIn.base} = {toFixed(CalculatePriceByTick(tick), 4)} {amountOut.base}</Info>
            </InfoBlock>*/}
            {/*<Info>Route: {amountIn.base} {"->"} {amountOut.base}</Info>*/}
        </Cotainer>
    )
}