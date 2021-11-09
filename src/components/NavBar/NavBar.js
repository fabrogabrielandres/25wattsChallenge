import React, { useEffect, useState } from 'react'
import { Button, NavLeft, NavRight, NavWrapper } from './styles'
import { ReactComponent as Logo } from '../../assets/logo_25w.svg';

export const NavBar = () => {
    const [positionY, setPositionY] = useState(0)
    const [toggle, setToggle] = useState(false)

    const burguerMenu = () => { console.log(toggle) }



    const ListenPosition = () => {
        setPositionY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", ListenPosition)
    }, [])

    return (
        <>
            <NavWrapper scroll={positionY}>
                <NavLeft scroll={positionY}>
                    <Logo fill="#ffffff" stroke="#ffffff" />
                </NavLeft>
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
            <button
                onClick={() => console.log("hola")}
            >
                button
            </button>
        </>
    )
}
