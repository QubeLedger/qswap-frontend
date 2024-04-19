import styled from "styled-components";
import ArrowGrey from '../../../../assets/svg/ArrowSwap.svg'
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useAmountIn, useAmountOut } from "../../../../hooks/useAmountInStore";


const SwapField = styled.div <{SwapButton: string, BorderField: string}>`
    width: 40px;
    height: 40px;
    border: ${props => props.BorderField};
    background: ${props => props.SwapButton};
    position: absolute;
    margin-top: 11.5em;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
    }
`

const TokenIcon = styled.svg <{icon: string}>`
    background: url(${props => props.icon});
    height: 20px;
    width: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 500px){
        margin-right: 0px;
    }
`


export const SwapFieldButton = () => {
    const [theme, setTheme] = useToggleTheme();
    const [amountIn, setAmountIn] = useAmountIn()
    const [amountOut, setAmountOut] = useAmountOut()

    const HandleChangeTokensButton = () => {
        let old_amountIn = amountIn
        setAmountIn({
            amt: amountOut.amt,
            base: amountOut.base,
            denom: amountOut.denom,
            logo: amountOut.logo
        })

        setAmountOut({
            amt: old_amountIn.amt,
            base: old_amountIn.base,
            denom: old_amountIn.denom,
            logo: old_amountIn.logo
        })
    }

    return(
        <SwapField BorderField={theme.BorderField} SwapButton={theme.SwapButton}>
            <TokenIcon icon={ArrowGrey} onClick={HandleChangeTokensButton}/>
        </SwapField>
    )
}