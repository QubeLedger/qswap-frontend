import styled from "styled-components";
import QubeLogo from '../../../assets/svg/QubeLogo.webp'
import { ConnectButton } from "../../Buttons/ConnectButton/ConnectButton";
import { ChangeTheme } from "../../Buttons/ChangeTheme/ChangeTheme";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { useMediaQuery } from "react-responsive";
import { DesLink, MobileLink } from "./Links";

const Header = styled.div <{headerColor: string}>`
    width: 100%;
    height: 80px;
    background: ${props => props.headerColor};
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        background: transparent;
    }
`

const Logo = styled.img`
    width: 55px;
    height: 55px;
    margin-left: 60px;
    @media (max-width: 500px) {
        margin-left: 20px;
    }
`


export const MainHeader = () => {
    
    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 930px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 930px)",
    });

    return(
        <Header headerColor={theme.headerColor}>
            <Logo src={QubeLogo}/>
            {isDes && <DesLink/>}
            <ChangeTheme/>
            <ConnectButton/> 
            {isMob && <MobileLink/>}
        </Header>
    )
}