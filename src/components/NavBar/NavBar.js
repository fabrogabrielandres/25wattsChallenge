import React from 'react'
import { NavLeft, NavRight, NavWrapper,NavContainer } from './styles'

export const NavBar = () => {
    return (
            <NavWrapper>
                <NavLeft />
                <NavRight>
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
