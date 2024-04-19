import styled from "styled-components";
import { SwapPageLink } from "./SwapPageLink";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const Header = styled.div`
    width: 100%;
    display: flex;
    display: flex;
    flex-direction: column;
`

const HeaderText = styled.a <{TextColor: string}>`
    font-size: 26px;
    color: ${props => props.TextColor};
    font-weight: 500;
`

const HeaderDescription = styled.a <{TextColor: string}>`
    font-size: 14px;
    color: ${props => props.TextColor};
    font-weight: 500;
`


export const SwapPageHeader = () => {

    const text = "Switch to Orderbook >";
    
    const [theme, setTheme] = useToggleTheme()

    return(
        <Header>
            <HeaderText TextColor={theme.TextColor}>Swap</HeaderText>
            <SwapPageLink to="/orderbook">
                <HeaderDescription TextColor={theme.TextColor}>{text}</HeaderDescription>
            </SwapPageLink>
        </Header>
    )
}