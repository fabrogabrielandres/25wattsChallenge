import React from 'react'
import { AboutUs } from '../About/AboutUs'
import { Header } from '../Header/Header'
import { NavBar } from '../NavBar/NavBar'
import { AboutUsLayout, GridLayout, HeaderLayout, LayoutContainer } from './styles'

export const Layout = () => {
    return (
        <>
            <LayoutContainer>
                <GridLayout>
                    <HeaderLayout>
                        <Header/>
                    </HeaderLayout>
                    <AboutUsLayout>
                        <AboutUs/>
                    </AboutUsLayout>                    
                    <NavBar/>
                </GridLayout>
            </LayoutContainer>
        </>
    )
}
