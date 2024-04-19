import styled from "styled-components";
import USDC from '../../../../../assets/svg/USDC Logo.webp'
import Atom from '../../../../../assets/svg/AtomLogo.png'
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { SwapModalInfo } from "./SwapModalInfo";
import { SwapPageConfirm } from "../../../../Buttons/PageButtons/SwapPage/SwapPageConfirm";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Block = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
`

const TextBlock = styled.div`
    width: 90%;
    text-align: left;
`

const Text = styled.a <{ TextColor: string }>`
    font-size: 11px;
    color: ${props => props.TextColor};
`

const Field = styled.div`
    width: 90%;
    height: 65px;
    background: transparent;
    border-radius: 15px;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`

const LogoBlock = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
`

const TokenLogo = styled.img`
    width: 40px;
    height: 40px;
`

const TokenName = styled.a <{ TextColor: string }>`
    font-size: 24px;
    color: ${props => props.TextColor};
    font-weight: 500;
    margin-left: 10px;
`

const AmountBlock = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`

const AmountToken = styled.a <{ TextColor: string }>`
    font-size: 25px;
    color: ${props => props.TextColor};
    font-weight: 500;
`

const GradientBlock = styled.div`
    width: 90%;
    height: 5px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border-radius: 50px;
    margin-top: 10px;
`


export const SwapModalContent = () => {

    const [theme, setTheme] = useToggleTheme();

    const Content =
        <>
            <Block>
                <TextBlock>
                    <Text TextColor={theme.TextColor}>You give</Text>
                </TextBlock>
                <Field>
                    <LogoBlock>
                        <TokenLogo src={Atom}></TokenLogo>
                        <TokenName TextColor={theme.TextColor}>ATOM</TokenName>
                    </LogoBlock>
                    <AmountBlock>
                        <AmountToken TextColor={theme.TextColor}>35</AmountToken>
                    </AmountBlock>
                </Field>
                <TextBlock>
                    <Text TextColor={theme.TextColor}>You'll get</Text>
                </TextBlock>
                <Field>
                    <LogoBlock>
                        <TokenLogo src={USDC}></TokenLogo>
                        <TokenName TextColor={theme.TextColor}>USDC</TokenName>
                    </LogoBlock>
                    <AmountBlock>
                        <AmountToken TextColor={theme.TextColor}>1100</AmountToken>
                    </AmountBlock>
                </Field>
                <GradientBlock />
                <SwapModalInfo />
                <SwapPageConfirm />
            </Block>
        </>

    const Error =
        <>
            <Block>
                
            </Block>
        </>

    return (
        <Container>
            {Content}
        </Container>
    )
}