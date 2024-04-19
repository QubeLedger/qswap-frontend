import styled from 'styled-components';
import FailedImg from '../../../assets/icons/Failed.webp'
import { useToggleTheme } from '../../../hooks/useToggleTheme';

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
    margin: 30px auto 20px auto;
`

const Button = styled.button`
    width: 90%;
    height: 50px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border-radius: 15px;
    border: none;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #fff;
    display: flex;
    transition: all .15s ease-in-out;
    margin: 10px 0px 20px 0px;
    &:active {
         transform: scale(0.95);
    } 
`

const Text = styled.a <{TextColor: string}>`
	font-size: 15px;
	font-weight: 500;
	color: ${props => props.TextColor};
`

const Description = styled.h3 <{TextColor: string}>`
	font-size: 15px;
	font-weight: 500;
	color: ${props => props.TextColor};
`


export function FailedModalComponent(
	actiom: string, theme: any
) {
	return <>
		<ContentDiv>
			<Container>
				<Block>
					<Img src={FailedImg}></Img>
					<Text TextColor={theme.TextColor}>Failed {actiom}</Text>
					<div style={{width: "85%"}}>
						<Description TextColor={theme.TextColor}>
                            It looks like you canceled the transaction or used insufficient gas to complete it.
						</Description>
					</div>
					<Button>Try Again</Button>
				</Block>
			</Container>
		</ContentDiv>
	</>
}

{/*<InfoBlock>
		<BlockInfo>
		<InfoText>Proceed in your wallet</InfoText>
		</BlockInfo>
</InfoBlock>*/}