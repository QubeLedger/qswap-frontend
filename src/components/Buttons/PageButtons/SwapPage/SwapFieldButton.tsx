import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const SwapField = styled.div <{SwapButton: string, BorderField: string}>`
    width: 40px;
    height: 40px;
    border: ${props => props.BorderField};
    background: ${props => props.SwapButton};
    position: absolute;
    margin-top: 11.5em;
    border-radius: 15px;
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
    }
`


export const SwapFieldButton = () => {

    
    const [theme, setTheme] = useToggleTheme()

    return(
        <SwapField BorderField={theme.BorderField} SwapButton={theme.SwapButton}>

        </SwapField>
    )
}