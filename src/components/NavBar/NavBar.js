import React, { useEffect, useState } from 'react'
import { Button, NavLeft, NavRight, NavWrapper } from './styles'
import { ReactComponent as Logo } from '../../assets/logo_25w.svg';
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll"

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
                <Logo fill="#ffffff" stroke="#ffffff"  onClick={()=>scroll.scrollToTop()}/>
            </NavLeft>
            <Button
                onClick={changeHiden}
            >
                hola
            </Button>
            <NavRight scroll={positionY}>
                <ul>
                    <li>
                        <Link to="Header" smooth={true} duration={1000}>
                            Home
                        </Link>

                    </li>
                    <li>
                        <Link to="About" smooth={true} duration={1000}>
                            About us
                        </Link>

                    </li>
                    <li>
                        <Link to="Services" smooth={true} duration={1000}>
                            Services
                        </Link>

                    </li>
                    <li>
                        <Link to="Products" smooth={true} duration={1000}>
                            Products
                        </Link>

                    </li>
                    <li>
                        <Link to="Details" smooth={true} duration={1000}>
                            Details
                        </Link>

                    </li>
                    <li>
                        <Link to="Contact" smooth={true} duration={1000}>
                            Contact
                        </Link>

                    </li>
                </ul>

            </NavRight>

        </NavWrapper>
    )
}
