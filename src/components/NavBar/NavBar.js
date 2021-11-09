import React, { useEffect, useState } from 'react'
import { Button, NavLeft, NavRight, NavWrapper } from './styles'
import { ReactComponent as Logo } from '../../assets/logo_25w.svg';

export const NavBar = () => {
    const [positionY, setPositionY] = useState(0)
    const [toggle, setToggle] = useState(false)

    const changeHiden = () => {
        console.log(toggle);
        setToggle(!toggle)
    }


    const ListenPosition = () => {
        setPositionY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", ListenPosition)
    }, [])

    return (
        <NavWrapper scroll={positionY}
        toggle={toggle}
        >
            <NavLeft scroll={positionY}>
                <Logo fill="#ffffff" stroke="#ffffff" />
            </NavLeft>
            <Button
                onClick={changeHiden}
            >
                hola
            </Button>
            <NavRight scroll={positionY}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Details
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>

            </NavRight>

        </NavWrapper>
    )
}
