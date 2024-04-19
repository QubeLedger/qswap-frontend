import styled from "styled-components";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { animated } from '@react-spring/web';
import QubeLogo from '../../../../assets/svg/QubeLogo.webp'
import ArrowWhite from '../../../../assets/svg/ArrowWhite.webp'
import ArrowBlack from '../../../../assets/svg/ArrowBlack.webp'
import loop from '../../../../assets/svg/loop.svg'
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useShowModalSwapTo } from "../../../../hooks/useShowModal";
import { TOKEN_INFO } from "../../../../constants";
import { toFixed } from "../../../../constants/utils";
import { useTokenBalanceStore } from "../../../../hooks/useBalanceStore";
import { useAmountOut } from "../../../../hooks/useAmountInStore";


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

const OpenButton = styled.button <{ TextColor: string }>`
    background:transparent;
    border:none;
    outline: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    padding: 0;
    white-space: nowrap;
    margin-right: 30px;
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

const TokenLogo = styled.img`
    width: 30px;
    height: 30px; 
    border-radius: 50px;
`

const Name = styled.a <{ TextColor: string }>`
    font-size: 22px;
    color: ${props => props.TextColor};
    font-weight: 500;
    margin-left: 10px;
`

const TokenName = styled.a <{ TextColor: string }>`
    font-size: 22px;
    color: ${props => props.TextColor};
    font-weight: 500;
    margin-left: 10px;
    @media (max-width: 500px) {
        font-size: 18px;
        margin-top: 2px;   
    }
`

const ArrowLogo = styled.svg <{ ArrrowColor: string }>`
    width: 12px;
    height: 12px;
    margin-left: 5px;
    margin-top: -2px;
    background: url(${props => props.ArrrowColor});
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 500px) {
        width: 10px;
        height: 10px;
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

const AmountText = styled.a <{ TextColor: string }>`
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.TextColor};
`

const Token = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
`

const TokenContrainer = styled.div`
    height: 50px;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    cursor: pointer;
`

const TokenBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    overflow-y: auto;
    scrollbar-width: none;
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

export const SwapPageModalTo = () => {

    const [theme, setTheme] = useToggleTheme()
    const [ShowModalSwapTo, setShowModalSwapTo] = useShowModalSwapTo();
    const [amountOut, setAmountOut] = useAmountOut()
    const [tokenBalances, setTokenBalanceStore] = useTokenBalanceStore()


    const open = () => { setShowModalSwapTo({ b: true }) };
    const close = () => { setShowModalSwapTo({ b: false }) };

    let tokens = TOKEN_INFO.map((token) => 
        <TokenContrainer onClick={() => {
            setAmountOut({
                amt: amountOut.amt,
                logo: token.Logo,
                base: token.Base,
                denom: token.Denom,
            })
            close()
        }}>
            <Token>
                <TokenLogo src={token.Logo} />
                <TokenName style={{fontSize: "20px"}} TextColor={theme.TextColor}>{token.Base}</TokenName>
            </Token>
            <AmountText TextColor={theme.TextColor}>{
                tokenBalances.find((tokenBalance) => tokenBalance.Display == token.Base)?.Amount === undefined ? 
                0 : 
                toFixed(Number(tokenBalances.find((tokenBalance) => tokenBalance.Display == token.Base)?.Amount), 4)
            }</AmountText>
        </TokenContrainer>
    )

    return (
        <ModalBlock>
            <OpenButton TextColor={theme.TextColor} onClick={open}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <TokenLogo src={amountOut.logo} />
                    <Name TextColor={theme.TextColor}>{amountOut.base}</Name>
                </div>
            </OpenButton>
            <StyledDialogOvelay isOpen={ShowModalSwapTo.b} onDismiss={close}>
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
                    <TokenBlock>
                        {tokens}
                    </TokenBlock>
                </StyledDialogContent>
            </StyledDialogOvelay>
        </ModalBlock>
    );
}