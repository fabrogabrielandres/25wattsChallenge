import React from 'react'
import { AboutUs } from '../About/AboutUs'
import { Header } from '../Header/Header'
import { NavBar } from '../NavBar/NavBar'
import { Products } from '../Products/Products'
import { Services } from '../Services/Services'
import { AboutUsLayout, GridLayout, HeaderLayout, LayoutContainer, ServicesLayout } from './styles'

export const Layout = () => {
    return (
        <>
            <LayoutContainer>
                {/* <GridLayout> */}
                    {/* <HeaderLayout> */}
                        <Header />
                    {/* </HeaderLayout> */}
                    {/* <AboutUsLayout> */}
                        <AboutUs />
                    {/* </AboutUsLayout> */}
                    {/* <ServicesLayout> */}
                        <Services />
                    {/* </ServicesLayout> */}
                        <Products/>

                    <NavBar />
                {/* </GridLayout> */}
            </LayoutContainer>
        </>
    )
}
