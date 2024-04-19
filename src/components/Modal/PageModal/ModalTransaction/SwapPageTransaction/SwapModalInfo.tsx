import styled from "styled-components";
import { QUBE_TESTNET_INFO } from "../../../../../constants";
import { useRoutes } from "../../../../../hooks/usePoolMetadata";
import { GetBaseByDenom } from "../../../../../constants/utils";

const InfoBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LTVBlock = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
`

const InfoText = styled.h1`
    font-size: 16px;
    color: #BABABA;
    margin: 0;
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
    margin-top: 10px;
`

export const SwapModalInfo = () => {
    const [routes, setRoutes] = useRoutes();

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
        <InfoBlock>
            <BlockInfo>
                <InfoText>Route</InfoText>
                <InfoText>{route_string}</InfoText>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Max transaction fee</InfoText>
                <InfoText>{QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.high} {QUBE_TESTNET_INFO.feeCurrencies[0].coinDenom}</InfoText>
            </BlockInfo>
        </InfoBlock>
    )
}