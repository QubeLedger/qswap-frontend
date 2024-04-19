import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';


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

const Text = styled.a <{ TextColor: string }>`
	font-size: 15px;
	font-weight: 500;
	color: ${props => props.TextColor};
    margin-bottom: 25px;
`

const Description = styled.h3 `
	font-size: 13px;
	font-weight: 500;
	color: #888;
    margin-bottom: 15px;
`


export function LoadingModalComponent(
    actiom: string, theme: any
) {
    return <>
        <ContentDiv>
            <Container>
                <Block>
                    <LoadingCircleBlock>
                        <CircularProgress disableShrink size={80} />
                    </LoadingCircleBlock>
                    <Text TextColor={theme.TextColor}>Confirm {actiom}</Text>
                    <Description>Proceed in your wallet</Description>
                </Block>
            </Container>
        </ContentDiv>
    </>
}

