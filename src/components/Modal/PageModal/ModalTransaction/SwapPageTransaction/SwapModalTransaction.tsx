import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { useShowModalSwapTransaction, useShowTransactionModalSwap, useShowWalletModal } from '../../../../../hooks/useShowModal';
import { useToggleTheme } from '../../../../../hooks/useToggleTheme';
import { Modal } from '../../Modal';
import { useWallet } from '../../../../../hooks/useWallet';
import { SwapModal } from './SwapModalContent';
import { useAmountIn } from '../../../../../hooks/useAmountInStore';
import { useBalancesStore } from '../../../../../hooks/useBalanceStore';
import { TOKEN_INFO } from '../../../../../constants';
const ModalDialogOverlay = animated(DialogOverlay);
const StyledDialogOvelay = styled(ModalDialogOverlay)`
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

const OpenButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const OpenButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    background: linear-gradient(to left, #3B9CFC, #6CBBFF);
    border: none;
    margin: 0 auto;
    border-radius: 18px;
    cursor: pointer;
    color: #fff;
    margin-top: 40px;
    transition: all .15s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const InactiveButton = styled.button`
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    background: #757575;
    border: none;
    margin: 0 auto;
    border-radius: 18px;
    cursor: pointer;
    color: #fff;
    margin-top: 40px;
    transition: all .15s ease-in-out;
    &:active {
        transform: scale(0.95);
    }
`


const ModalDialogContent = animated(DialogContent);
const StyledDialogContent = styled(ModalDialogContent) <{ modalBgColor: string, modalBorder: string }>`
    &[data-reach-dialog-content] {
        background-color: ${props => props.modalBgColor};
        width: 375px;
        height: 400px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        border:  ${props => props.modalBorder};
        margin-top: -10px;
        position: relative;
        outline: none;
        @media (max-width: 330px) {
            width: 305px;
        }
    }
`


export const SwapModalTransaction = () => {

    const open = () => { setShowModalSwapTransaction({ b: true }) };
    const close = () => { setShowModalSwapTransaction({ b: false }); setShowTransactionModalSwap({ b: false, isPending: false, status: "" })};
    const [theme, setTheme] = useToggleTheme();
    const [ShowTransactionModalSwap, setShowTransactionModalSwap] = useShowTransactionModalSwap();
    const [ShowModalSwapTransaction, setShowModalSwapTransaction] = useShowModalSwapTransaction();
    const [wallet, setWallet] = useWallet();
    const [walletModalStatus, setWalletModalStatus] = useShowWalletModal();
    const [amtIn, setAmountIn] = useAmountIn();
    const [balances, setBalances] = useBalancesStore();
    let balance = balances.find((balance) => balance.denom == amtIn.denom)

    const ModalComponent = Modal(
        ShowModalSwapTransaction.b,
        close,
        SwapModal(theme.TextColor, wallet, close),
        theme.modalBgColor,
        theme.modalBorder
    )

    let Button;

    if (wallet.init == false) {
        Button = <OpenButtonBlock onClick={() => { setWalletModalStatus({ b: true }) }}>
            <OpenButton>Connect wallet</OpenButton>
        </OpenButtonBlock>
    } else if (amtIn.amt == '' || amtIn.amt == '0' || isNaN(Number(amtIn.amt)) || Number(amtIn.amt) == 0) {
        Button = <OpenButtonBlock>
            <InactiveButton>Enter {amtIn.base} amount</InactiveButton>
        </OpenButtonBlock>
    } else if (Number(balance?.amt) < (Number(amtIn.amt) * (10 ** Number(TOKEN_INFO.find((token) => token.Base == amtIn.base)?.Decimals)))) {
        Button = <OpenButtonBlock>
            <InactiveButton>Insufficient funds</InactiveButton>
        </OpenButtonBlock>
    } else {
        Button = <OpenButtonBlock>
            <OpenButton onClick={open}>Confirm</OpenButton>
            {ModalComponent}
        </OpenButtonBlock>
    }

    return (
        <>
            {Button}
        </>
    );
}