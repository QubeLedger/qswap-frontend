import styled from "styled-components";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated } from '@react-spring/web';
import AtomLogo from '../../../../assets/svg/AtomLogo.png'
import loop from '../../../../assets/svg/loop.svg'
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useShowModalSwapFrom } from "../../../../hooks/useShowModal";
import { useAmountIn, useAmountOut } from "../../../../hooks/useAmountInStore";
import { TOKEN_INFO } from "../../../../constants";
import { useTokenBalanceStore } from "../../../../hooks/useBalanceStore";
import { toFixed } from "../../../../constants/utils";


const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay)`
    &[data-reach-dialog-overlay] {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        display:flex;
        align-items: center;
        justify-content: center; 
        transition: background-color 3s;
        background-color: rgba(0,0,0,.45);
    }
`

const ModalBlock = styled.div`
    display: flex;
    align-items: center;
`

const CloseButton = styled.button <{ TextColor: string }>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 26px;
    margin-top: -10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`

const OpenButton = styled.button <{ TextColor: string, modalHover: string, OpenButtonBg: string }>`
    background: ${props => props.OpenButtonBg};
    border:none;
    outline: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 10px;
    border-radius: 50px;
    white-space: nowrap;
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: ${props => props.TextColor};
`

const CloseButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
`

const CloseDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
`

const SearchDiv = styled.div <{ inputBgColor: string, modalBorder: string }>`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.inputBgColor};
    border-radius: 5px;
    margin-bottom: 10px;
    border: ${props => props.modalBorder};
    width: 85%;
`

const SearchBorder = styled.div <{ modalBorder: string }>`
    border-bottom: ${props => props.modalBorder};
    width: 100%;
    display: flex;
    justify-content: center;
`

const LoopImg = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 15px;
`

const SearchToken = styled.input`
    width: 300px;
    height: 30px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    outline: none;
    font-size: 16px;
    color: #5e5e5e;
    font-weight: 600;
    font-family: 'Metropolis', sans-serif;
`

const OpenTokenLogo = styled.img`
    width: 32px;
    height: 32px;  
    border-radius: 50px;
`

const TokenLogo = styled.img`
    width: 45px;
    height: 45px;  
    border-radius: 50px;
`

const TokenName = styled.a <{ TextColor: string }>`
    font-size: 16px;
    color: ${props => props.TextColor};
    font-weight: 600;
    margin-left: 10px;
    @media (max-width: 500px) {
        margin-top: 2px;   
    }
`

const TokenNameBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const TokenNetwork = styled.a`
    font-size: 13px;
    color: #888;
    font-weight: 600;
    margin-left: 10px;
    @media (max-width: 500px) {
        margin-top: 2px;   
    }
`

const ModalTextBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const ModalText = styled.h4 <{ TextColor: string }>`
    margin-left: 26px;
    font-size: 20px;
    color: ${props => props.TextColor};
`

const AmountText = styled.h2 <{ TextColor: string }>`
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    color: ${props => props.TextColor};
`

const Token = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
`

const TokenContrainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 20px;
`

const TokenBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    scrollbar-width: none;
    margin-top: 10px;
`

const HoverBlock = styled.div <{ ModalHoverColor: string }>`
    width: 80%;
    padding: 0px 10px;
    border-radius: 20px;
    &:hover{
        background: ${props => props.ModalHoverColor};
        transition: background .2s ease-in-out;
    }
`



const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{ modalBgColor: string, modalBorder: string }> `
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 380px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        border-radius: 10px;
        border: ${props => props.modalBorder};
        margin-top: 70px;
        @media (max-width: 500px) {
            width: 335px;
            height: 560px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`

export const SwapPageModalFrom = () => {

    const [theme, setTheme] = useToggleTheme()
    const [ShowModalSwapFrom, setShowModalSwapFrom] = useShowModalSwapFrom();
    const [amountIn, setAmountIn] = useAmountIn()
    const [amountOut, setAmountOut] = useAmountOut()
    const [tokenBalances, setTokenBalanceStore] = useTokenBalanceStore()

    const open = () => { setShowModalSwapFrom({ b: true }) };
    const close = () => { setShowModalSwapFrom({ b: false }) };

    let temp_TOKEN_INFO = TOKEN_INFO.filter(token => token.Base !== amountOut.base)

    let tokens = temp_TOKEN_INFO.map((token) =>
        <HoverBlock ModalHoverColor={theme.ModalHoverColor}>
            <TokenContrainer onClick={() => {
                setAmountIn({
                    amt: amountIn.amt,
                    logo: token.Logo,
                    base: token.Base,
                    denom: token.Denom,
                })
                close()
            }}>
                <Token>
                    <TokenLogo src={token.Logo} />
                    <TokenNameBlock>
                        <TokenName TextColor={theme.TextColor}>{token.Base}</TokenName>
                        <TokenNetwork>{token.Base}</TokenNetwork>
                    </TokenNameBlock>
                </Token>
                <AmountText TextColor={theme.TextColor}>{
                    tokenBalances.find((tokenBalance) => tokenBalance.Display == token.Base)?.Amount === undefined ?
                        0 :
                        toFixed(Number(tokenBalances.find((tokenBalance) => tokenBalance.Display == token.Base)?.Amount), 4)
                }</AmountText>
            </TokenContrainer>
        </HoverBlock>
    )

    return (
        <ModalBlock>
            <OpenButton OpenButtonBg={theme.OpenButtonBg} modalHover={theme.modalHover} TextColor={theme.TextColor} onClick={open}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <OpenTokenLogo src={amountIn.logo} />
                    <TokenName TextColor={theme.TextColor}>{amountIn.base}</TokenName>
                </div>
            </OpenButton>
            <StyledDialogOvelay isOpen={ShowModalSwapFrom.b} onDismiss={close}>
                <StyledDialogContent modalBgColor={theme.modalBgColor} modalBorder={theme.modalBorder}>
                    <CloseDiv>
                        <ModalTextBlock>
                            <ModalText TextColor={theme.TextColor}>Select a token</ModalText>
                        </ModalTextBlock>
                        <CloseButtonBlock>
                            <CloseButton TextColor={theme.TextColor} onClick={close}>
                                <span aria-hidden>×</span>
                            </CloseButton>
                        </CloseButtonBlock>
                    </CloseDiv>
                    <SearchBorder modalBorder={theme.modalBorder}>
                        <SearchDiv inputBgColor={theme.inputBgColor} modalBorder={theme.modalBorder}>
                            <LoopImg src={loop}></LoopImg>
                            <SearchToken placeholder='Search'></SearchToken>
                        </SearchDiv>
                    </SearchBorder>
                    <TokenBlock >
                        {tokens}
                    </TokenBlock>
                </StyledDialogContent>
            </StyledDialogOvelay>
        </ModalBlock>
    );
}