import styled from "styled-components";
import { getBalanceByToken, toFixed } from "../../../../constants/utils";
import { useBalancesStore } from "../../../../hooks/useBalanceStore";
import { useAmountIn, useValue } from "../../../../hooks/useAmountInStore";

const Button = styled.div`
    width: 35px;
    height: 14px;
    font-size: 9px;
    font-weight: 700;
    color: #222;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;
    background: linear-gradient(to right, #6db8ff, #38a3ff);
    margin-right: 30px;
`


export const SwapPageMAXButton = () => {

    const [balances, setBalances ] = useBalancesStore();
    const [amountIn, setAmountIn] = useAmountIn()
    const [value, setValue] = useValue();

    const HandleClickMaxButton = () => {
        let amount = isNaN(getBalanceByToken(balances, amountIn.denom))? 0 : getBalanceByToken(balances, amountIn.denom)
        setValue(
            {
                value: toFixed(amount, 3),
            }
        );
    } 

    return(
        <Button onClick={HandleClickMaxButton}>
            Max
        </Button>
    )
}