import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    text-decoration: none;
    font-weight: 700;
    outline: none;
    font-size: 15px;
    padding: 10px 20px;
    text-align: center;
    display: flex;
    align-items: center;
    @media (max-width: 1110px) {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
    }
    @media (max-width: 730px) {
        font-size: 13px;
        line-height: 1.2rem;
        font-weight: 600;
    }
`

interface Props {
    to: string;
    children: ReactNode;
}

export const MainHeaderLink = ({children, to}: Props) => {

    const [theme, setTheme] = useToggleTheme()

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: match ? theme.active == true ? '#fff' : '#555' :  theme.active == true ? '#666' : '#aaa',
            transition: '.2s ease-in-out',
        }}
        >
            {children}
        </LinkBLock>
    )
}