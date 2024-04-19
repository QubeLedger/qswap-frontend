import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import { SwapPage } from "./Pages/Swap/SwapPage";
import { MainHeader } from "./Header/MainHeader/MainHeader";
import { useToggleTheme } from "../hooks/useToggleTheme";
import { Pools } from "./Pages/Pools/Pools";
import { Orderbook } from "./Pages/Orderbook/Orderbook";
import { Futures } from "./Pages/Futures/Futures";
import { Deposit } from "./Pages/Deposit/Deposit";

const Container = styled.div <{backgroundColor: string}>`
    display: flex;
    flex-direction: column;
    background: ${props => props.backgroundColor};
    overflow: hidden;
`

const PageContainer = styled.div`
    height: calc(-80px + 100vh);
    display: flex;
    justify-content: center;
`


export const MainIndex = () => {

    const [theme, setTheme] = useToggleTheme()

    return (
        <Container backgroundColor={theme.backgroundColor}>
            <MainHeader />
            <PageContainer>
                <Routes>
                    <Route path="/orderbook" element={<Orderbook/>} />
                    <Route path="/pools" element={<Pools/>} />
                    <Route path="/" element={<SwapPage />} />
                    <Route path="/futures" element={<Futures/>} />
                    <Route path="/deposit" element={<Deposit/>} />
                </Routes>
            </PageContainer>
        </Container>
    )
}