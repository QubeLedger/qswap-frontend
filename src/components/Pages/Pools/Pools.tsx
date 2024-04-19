import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        width: 90%;
    }
`

const SoonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

const SoonText = styled.a`
    font-size: 30px;
    background: linear-gradient(to right, #77bff9, #2d96ff);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -70px;
    font-weight: 700;
`


export const Pools = () => {
    return(
        <Container>
            <SoonBlock>
                <SoonText>Soon</SoonText>
            </SoonBlock>
        </Container>
    )
}