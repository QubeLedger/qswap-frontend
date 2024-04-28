import styled from "styled-components";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useAmountIn } from "../../../../hooks/useAmountInStore";
import { FormEvent, useEffect, useState } from "react";
import { useDebounce } from "../../../../constants/utils";

const Input = styled.input <{TextColor: string}>`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
    background: transparent;
    color: ${props => props.TextColor};
    font-size: 30px;
    padding-left: 30px;
    font-weight: 700;
`


export const SwapPageInput = () => {

    const [theme, setTheme] = useToggleTheme();
    const [amtIn, setAmtIn] = useAmountIn()
    const [wait, setWait] = useDebounce();
    const [value, setValue] = useState("");

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAmtIn(
                {
                    amt: value,
                    base: amtIn.base,
                    logo: amtIn.logo,
                    denom: amtIn.denom,
                }
            );
        }, 350);
        return () => clearTimeout(timeoutId);
    }, [value]);

    return(
        <Input TextColor={theme.TextColor} placeholder="0" onChange={HandleInputAmpunt} value={amtIn.amt}></Input>
    )
}
