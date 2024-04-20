import styled from "styled-components";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { SwapModalInfo } from "./SwapModalInfo";
import { AmountIn, AmountWithLogo, useAmountIn, useAmountOut } from "../../../../../hooks/useAmountInStore";
import { useEffect, useState } from "react";
import { GetOutAmountByRouteAndInput } from "../../../../../web3/routes";
import { useRoutes } from "../../../../../hooks/usePoolMetadata";
import { toFixed } from "../../../../../constants/utils";
import { useShowTransactionModalSwap } from "../../../../../hooks/useShowModal";
import { LoadingSwapModalComponent } from "../../../helpers/LoadingSwapModalComponent";
import { SucceedModalComponent } from "../../../helpers/SucceedModalComponent";
import { FailedModalComponent } from "../../../helpers/FailedModalComponent";
import { Wallet } from "../../../../../hooks/useWallet";
import { Client, useClient } from "../../../../../hooks/useClient";
import { MultihopSwap } from "../../../../../web3/swap";

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
    font-weight: 500;
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
    border-radius: 50px;
`

const TokenName = styled.a <{ TextColor: string }>`
    font-size: 22px;
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

const Button = styled.button`
    width: 90%;
    height: 50px;
    background: linear-gradient(to right, #74BCFD, #339BFE);
    border: none;
    border-radius: 20px;
    margin-top: 20px;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;
`

const CloseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Metropolis', sans-serif;
    color: white;
    margin-top: 20px;
`

const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const HeaderText = styled.a <{ TextColor: string }>`
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.TextColor};
    white-space: nowrap;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 17px;
`

const CloseButton = styled.button <{ TextColor: string }>`
    width: 25px;
    height: 25px;
    font-size: 30px;
    margin-right: 20px;
    margin-top: -1px;
    background-color: transparent;
    border: none;
    color: ${props => props.TextColor};
    margin-left: auto;
    outline: none;
`


export function SwapModal(
    TextColor: string,
    wallet: Wallet,
    onCLose: () => void,
) {
    const [theme, setTheme] = useToggleTheme();
    const [amountIn, setAmountIn] = useAmountIn()
    const [amountOut, setAmountOut] = useAmountOut()
    const [out, setOut] = useState(0);
    const [routes, setRoutes] = useRoutes();
    const [ShowTransactionModalSwap, setShowTransactionModalSwap] = useShowTransactionModalSwap();
    const [tx, setTx] = useState('')
    const [client, setClient] = useClient();

    useEffect(() => {
        async function main() {
            let temp_out = await GetOutAmountByRouteAndInput(routes, Number(amountIn.amt));
            setOut(temp_out)
        }
        main()
    }, [amountIn])

    const ContentModalNotPending =
        <>
            <ContentDiv>
                <Container>
                    <Block>
                        <TextBlock>
                            <Text TextColor={theme.TextColor}>You give</Text>
                        </TextBlock>
                        <Field>
                            <LogoBlock>
                                <TokenLogo src={amountIn.logo}></TokenLogo>
                                <TokenName TextColor={theme.TextColor}>{amountIn.base}</TokenName>
                            </LogoBlock>
                            <AmountBlock>
                                <AmountToken TextColor={theme.TextColor}>{amountIn.amt}</AmountToken>
                            </AmountBlock>
                        </Field>
                        <TextBlock>
                            <Text TextColor={theme.TextColor}>You'll get</Text>
                        </TextBlock>
                        <Field>
                            <LogoBlock>
                                <TokenLogo src={amountOut.logo}></TokenLogo>
                                <TokenName TextColor={theme.TextColor}>{amountOut.base}</TokenName>
                            </LogoBlock>
                            <AmountBlock>
                                <AmountToken TextColor={theme.TextColor}>{toFixed(out, 4)}</AmountToken>
                            </AmountBlock>
                        </Field>
                        <GradientBlock />
                        <SwapModalInfo />
                        <Button onClick={() => {
                            setShowTransactionModalSwap({ b: true, isPending: true, status: "" });
                            MultihopSwap(amountIn, wallet, routes, "0", client).then((
                                res
                            ) => {
                                setShowTransactionModalSwap({ b: ShowTransactionModalSwap.b, isPending: true, status: res[0] })
                                setTx(res[1])
                            })

                        }}>Swap</Button>
                    </Block>
                </Container>
            </ContentDiv>
        </>

    let PendingTxComponent;
    switch (ShowTransactionModalSwap.status) {
        case "":
            PendingTxComponent = LoadingSwapModalComponent(
                "swap",
                theme,
                amountIn,
                amountOut,
                out
            )
            break;

        case "Succeed":
            PendingTxComponent = SucceedModalComponent(
                "swap",
                theme,
                tx
            )
            break;

        case "Failed":
            PendingTxComponent = FailedModalComponent(
                "swap",
                theme
            )
            break;

        case "Error":
            PendingTxComponent = FailedModalComponent(
                "swap",
                theme
            )
            break;

    }

    return (
        <>
            <CloseDiv>
                <HeaderBlock>
                    <HeaderText TextColor={theme.TextColor}>Confirm swap</HeaderText>
                </HeaderBlock>
                <CloseButton TextColor={theme.TextColor}>
                    <a style={{ cursor: "pointer" }} onClick={onCLose} aria-hidden>×</a>
                </CloseButton>
            </CloseDiv>
            {ShowTransactionModalSwap.isPending ? PendingTxComponent : ContentModalNotPending}
        </>
    )
}