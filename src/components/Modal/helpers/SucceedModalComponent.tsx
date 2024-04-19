import styled from 'styled-components';
import SuccedImg from '../../../assets/icons/Succed.webp'

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

const Text = styled.a <{ TextColor: string }>`
	font-size: 15px;
	font-weight: 500;
	color: ${props => props.TextColor};
    margin-bottom: 40px;
`

const Description = styled.a `
	font-size: 13px;
	font-weight: 500;
	color: #888;
    margin-bottom: 15px;
`


export function SucceedModalComponent(
	actiom: string, 
    theme: any,
    tx: string,
) {
	return <>
		<ContentDiv>
			<Container>
				<Block>
					<Img src={SuccedImg}></Img>
					<Text TextColor={theme.TextColor}>Succees {actiom}</Text>
                    <Description href={`https://explorer.qubedao.com/qube/tx/${tx}`} target="_blank">View in explorer</Description>
				</Block>
			</Container>
		</ContentDiv>
	</>
}