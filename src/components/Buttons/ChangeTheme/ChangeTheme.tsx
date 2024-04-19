import styled from "styled-components";
import { ThemeBlackState, ThemeWhiteState, useToggleTheme } from "../../../hooks/useToggleTheme";
import Moon from '../../../assets/svg/Moon.webp'
import Sun from '../../../assets/svg/Sun.webp'
import { useConnectKeplrWalletStore } from "../../../hooks/useConnectKeplrWalletStore";

const SwapButton = styled.button`
    width: 35px;
    margin-right: 20px;
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    margin-left: auto;
    @media (max-width: 1050px) {
        margin-right: 20px;
        margin-left: auto;
    }
`

const ThemeIcon = styled.svg <{icon: string, margin: string}>`
    background: url(${props => props.icon});
    height: 28px;
    width: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    margin-top: ${props => props.margin};
    @media (max-width: 500px){
        margin-right: 0px;
    }
`


export const ChangeTheme = () => {

    const [theme, setTheme] = useToggleTheme();
    const [ connectWallet, setConnectKeplrWalletStore ] = useConnectKeplrWalletStore();

    function toggleTheme () {
        if(theme.active == false) {
            localStorage.setItem('Theme', 'black')
            setTheme(ThemeBlackState)
            
        } else if (theme.active == true) {
            localStorage.setItem('Theme', 'white')
            setTheme(ThemeWhiteState)
        }
    }

    
    return(
        <SwapButton onClick={toggleTheme}>
            <ThemeIcon margin={connectWallet.connected == true ? '-2px' : '0px' } icon={theme.active == true ? Sun : Moon}></ThemeIcon>
        </SwapButton>
    )
}