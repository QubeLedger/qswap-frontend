import styled from "styled-components";

const Button = styled.button`
    width: 90%;
    height: 50px;
    background: linear-gradient(to right, #74BCFD, #339BFE);
    border: none;
    border-radius: 20px;
    margin-top: 30px;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
`


export const SwapPageConfirm = () => {
    return(
        <Button>Swap</Button>
    )
}