import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { AmountWithLogo } from '../../../hooks/useAmountInStore';


const ContentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

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

const LoadingCircleBlock = styled.div`
    margin: 30px auto 20px auto;
`

const ConfirmText = styled.a <{ TextColor: string }>`
	font-size: 16px;
	font-weight: 500;
	color: ${props => props.TextColor};
    margin-bottom: 10px;
`

const Amount = styled.a <{ TextColor: string }>`
	font-size: 12px;
	font-weight: 500;
	color: ${props => props.TextColor};
    margin-bottom: 40px;
`

const Description = styled.h3 `
	font-size: 13px;
	font-weight: 500;
	color: #888;
    margin-bottom: 15px;
`


export function LoadingSwapModalComponent(
    actiom: string, theme: any, amountIn: AmountWithLogo, amountOut: AmountWithLogo, out: number,
) {
    return <>
        <ContentDiv>
            <Container>
                <Block>
                    <LoadingCircleBlock>
                        <CircularProgress disableShrink size={80} />
                    </LoadingCircleBlock>
                    <ConfirmText TextColor={theme.TextColor}>Confirm transaction in your wallet</ConfirmText>
                    <Amount TextColor={theme.TextColor}>Swap {amountIn.amt} {amountIn.base} to {out} {amountOut.base}</Amount>
                </Block>
            </Container>
        </ContentDiv>
    </>
}

