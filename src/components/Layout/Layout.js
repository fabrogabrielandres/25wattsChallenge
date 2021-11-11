import React from 'react'
import { AboutUs } from '../About/AboutUs'
import { Contact } from '../Contact/Contact'
import { Details } from '../Details/Details'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { NavBar } from '../NavBar/NavBar'
import { Products } from '../Products/Products'
import { Services } from '../Services/Services'
import { LayoutContainer } from './styles'

export const Layout = () => {
    return (
        <>
            <LayoutContainer>
                <Header />
                <AboutUs />
                <Services />
                <Products />
                <Details />
                <Contact />
                <Footer />
                <NavBar />
            </LayoutContainer>
        </>
    )
}
