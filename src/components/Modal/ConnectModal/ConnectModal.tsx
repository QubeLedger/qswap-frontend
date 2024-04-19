import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import KeplrLogo from '../../../assets/svg/Keplr.webp'
import { animated } from '@react-spring/web';
import { ConnectWallets } from '../../Wallets/ConnectWallets/ConnectWallets';
import { useConnectKeplrWalletStore } from '../../../hooks/useConnectKeplrWalletStore';
import { useWallet } from '../../../hooks/useWallet';
import { useShowWalletModal } from '../../../hooks/useShowModal';
import { useToggleTheme } from '../../../hooks/useToggleTheme';
import { useMediaQuery } from 'react-responsive';

const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay) `
    &[data-reach-dialog-overlay] {
        z-index: 1;
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

const CloseButton = styled.button <{TextColor: string}>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 20px;
    margin-top: 10px;
    background-color: transparent;
    border: none;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`

const OpenButton = styled.button <{color: string, border: string, margin: string}>`
    max-width:100%;
    background: ${props => props.color};
    border: ${props => props.border};
    outline: none;
    cursor: pointer;
    border-radius: 20px;
    font-family: 'Metropolis', sans-serif;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px;
    white-space: nowrap;
    margin-top: ${props => props.margin};
    color: #fff;
    @media (max-width: 500px) {
        font-size: 15px;
    }
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    margin-top: 10px;
`

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    @media (max-width: 500px) {
        flex-direction: column;
        }
`

const WalletList = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;
`

const LogoKeplr = styled.img`
    width: 20px;
    height: 20px;
    margin-top: -2px;
    margin-right: 5px;
`

const ConnectBlock = styled.div <{TextColor: string}>`
    display: flex;
    align-items: center;
    flex-direction: row;
    white-space: nowrap;
    color: ${props => props.TextColor};
`

const HeaderText = styled.a <{TextColor: string}>`
    font-size: 20px;
    color: ${props => props.TextColor};
    white-space: nowrap;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 3em;
    margin-top: 20px;
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{modalBgColor: string, modalBorder: string}>`
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 375px;
        height: 600px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border:  ${props => props.modalBorder};
        margin-top: -10px;
        position: relative;
        outline: none;
        @media (max-width: 500px) {
            width: 335px;
            height: 570px;
        }
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const ConnectModal = () => {

    const open = () => {setWalletModalStatus({b: true})};
    const close = () => {setWalletModalStatus({b: false})};

    let BackgroundConnectButton = 'linear-gradient(to right, #6db8ff, #0089ff)';
    var walletAddr: string = "";

    const [ connectWallet, setConnectKeplrWalletStore ] = useConnectKeplrWalletStore();
    const [ wallet, setWallet ] = useWallet();
    const [ walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    const disconnect = () => {
        setWallet({
            init: false,
            wallet: null,
            type: ""
        });
        setConnectKeplrWalletStore({
            connected: false
        })
        close()
        localStorage.setItem('Wallet', JSON.stringify({
            init: false,
            wallet: null,
            type: ""
        }))
    }

    if(wallet?.type == "keplr") {
        walletAddr =  'qube...' + String(wallet.wallet.bech32Address).slice(38,43);
    } 
    

    return (
      <div>
        <OpenButton onClick={wallet.init == false? open : disconnect} 
        color={connectWallet.connected == true ? 'transparent' : BackgroundConnectButton} 
        border={connectWallet.connected == true ? '2px solid #6CBBFF' : 'none' }
        margin={connectWallet.connected == true ? '-5px' : '-1px' }>
            {walletAddr == "" || undefined ? isDes ? "Connect Wallet" : "Connect" : <ConnectBlock TextColor={theme.TextColor}>  <LogoKeplr src={KeplrLogo}/>  {walletAddr} </ConnectBlock>}
        </OpenButton>
        <StyledDialogOvelay isOpen={walletModalStatus.b && !connectWallet.connected} onDismiss={close}>
            <StyledDialogContent modalBgColor={theme.modalBgColor} modalBorder={theme.modalBorder}>
                <CloseDiv>
                    <HeaderBlock>
                        <HeaderText TextColor={theme.TextColor}>Connect Wallet</HeaderText>
                    </HeaderBlock>              
                        <CloseButton TextColor={theme.TextColor}>
                            <a style={{cursor: "pointer"}} onClick={close} aria-hidden>×</a>
                        </CloseButton>
                </CloseDiv>
                <ContentDiv>
                    <WalletList>
                        <ConnectWallets></ConnectWallets>
                    </WalletList>
                </ContentDiv>
            </StyledDialogContent>
        </StyledDialogOvelay>
      </div>
    );
}