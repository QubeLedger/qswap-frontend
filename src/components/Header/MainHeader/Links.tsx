import styled from "styled-components";
import { MainHeaderLink } from "./CustomLink";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import SwapLogo from '../../../assets/svg/SwapLogo.svg'
import FuturesLogo from '../../../assets/svg/FuturesLogo.svg'
import Orderbook from '../../../assets/svg/Orderbook.svg'
import PoolsLogo from '../../../assets/svg/PoolsLogo.svg'
import DepositLogo from '../../../assets/svg/DepositLogo.svg'


const BlockLink = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    height: 60px;
    justify-content: center;
    margin-right: 30px;
    margin-left: 170px;
`

const NavBlock = styled.div <{ navBlockBg: string }>`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.navBlockBg};
    transition: padding-bottom .3s ease-in-out;
    border-radius: 20px;
`

const LinkBlock = styled.div`
    margin-top: -5px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
        justify-content: center;
    }
`

const MobLinkBlock = styled.div`
    display: flex;
    outline: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 5px;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const MobBlockLink = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    transition: max-height .3s ease-in-out;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

const LinkMobBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 10px;
`

const WalletLogo = styled.svg <{ icon: string }>`
    width: 30px;
    height: 30px;
    background: url(${props => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 5px;
`


export const DesLink = () => {

    return (
        <BlockLink>
            <LinkBlock>
                <MainHeaderLink to="/">Swap</MainHeaderLink>
            </LinkBlock>
            <LinkBlock>
                <MainHeaderLink to="/futures">Futures</MainHeaderLink>
            </LinkBlock>
            <LinkBlock>
                <MainHeaderLink to="/orderbook">Orderbook</MainHeaderLink>
            </LinkBlock>
            <LinkBlock>
                <MainHeaderLink to="/pools">Pools</MainHeaderLink>
            </LinkBlock>
            <LinkBlock>
                <MainHeaderLink to="/deposit">Deposit</MainHeaderLink>
            </LinkBlock>
        </BlockLink>
    )
}

export const MobileLink = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    return (
        <LinkMobBlock>
            <NavBlock navBlockBg={theme.navBlockBg}>
                <MobBlockLink>
                    <MobLinkBlock>
                        <MainHeaderLink to="/">
                            <WalletLogo icon={SwapLogo}></WalletLogo>
                            Swap
                        </MainHeaderLink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <MainHeaderLink to="/futures">
                            <WalletLogo icon={FuturesLogo}></WalletLogo>
                            Futures
                        </MainHeaderLink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <MainHeaderLink to="/orderbook">
                            <WalletLogo icon={Orderbook}></WalletLogo>
                            Orderbook
                        </MainHeaderLink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <MainHeaderLink to="/pools">
                            <WalletLogo icon={PoolsLogo}></WalletLogo>
                            Pools
                        </MainHeaderLink>
                    </MobLinkBlock>
                    <MobLinkBlock>
                        <MainHeaderLink to="/deposit">
                            <WalletLogo icon={DepositLogo}></WalletLogo>
                            Deposit
                        </MainHeaderLink>
                    </MobLinkBlock>
                </MobBlockLink>
            </NavBlock>
        </LinkMobBlock>
    )
}