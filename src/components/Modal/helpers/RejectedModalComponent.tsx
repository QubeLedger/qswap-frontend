import styled from 'styled-components';
import RejectedImg from '../../../assets/icons/Something.webp'

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

const Img = styled.img`
    width: 100px;
    height: 100px;
    margin: 150px auto;
`
export const RejectedModalComponent = <>
        <ContentDiv>
                <Container>
                        <Block>
                                <Img src={RejectedImg}></Img>
                                {/*<InfoBlock>
                                        <BlockInfo>
                                        <InfoText>Proceed in your wallet</InfoText>
                                        </BlockInfo>
                                </InfoBlock>*/}
                                
                        </Block>
                </Container>
        </ContentDiv>
</>