import styled from "styled-components";
import { QUBE_TESTNET_INFO } from "../../../../../constants";
import { useRoutes } from "../../../../../hooks/usePoolMetadata";
import { GetBaseByDenom } from "../../../../../constants/utils";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const InfoBlock = styled.div`
    width: 100%;
    margin-top: 10px;
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

const InfoNameText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #BABABA;
    margin: 0;
`

const InfoText = styled.a <{ TextColor: string }>`
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.TextColor};
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
    const [theme, setTheme] = useToggleTheme()

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
                <InfoNameText>Route</InfoNameText>
                <InfoText TextColor={theme.TextColor}>{route_string}</InfoText>
            </BlockInfo>
            <BlockInfo>
                <InfoNameText>Max transaction fee</InfoNameText>
                <InfoText TextColor={theme.TextColor}>{QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.high} {QUBE_TESTNET_INFO.feeCurrencies[0].coinDenom}</InfoText>
            </BlockInfo>
        </InfoBlock>
    )
}