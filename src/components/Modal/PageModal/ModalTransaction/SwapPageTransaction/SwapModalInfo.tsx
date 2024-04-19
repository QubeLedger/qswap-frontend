import styled from "styled-components";

const InfoBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LTVBlock = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
`

const InfoText = styled.h1`
    font-size: 16px;
    color: #BABABA;
    margin: 0;
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
    margin-top: 10px;
`

export const SwapModalInfo = () => {
    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Route</InfoText>
                <InfoText>0</InfoText>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Max transaction fee</InfoText>
                <InfoText>0</InfoText>
            </BlockInfo>
        </InfoBlock>
    )
}