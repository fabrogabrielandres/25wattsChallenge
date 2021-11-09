import React from 'react'
import { Header } from '../Header/Header'
import { NavBar } from '../NavBar/NavBar'
import { GridLayout, HeaderLayout, LayoutContainer } from './styles'

export const Layout = () => {
    return (
        <>
            <LayoutContainer>
                <GridLayout>
                    <HeaderLayout>
                        <Header />
                    </HeaderLayout>
                    <NavBar/>
                </GridLayout>
            </LayoutContainer>
        </>
    )
}
