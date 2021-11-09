import React from 'react'
import { Header } from '../Header/Header'
import { NavBar } from '../NavBar/NavBar'
import { GridLayout, HeaderLayout, LayoutContainer, NavLayout } from './styles'

export const Layout = () => {
    return (
        <>
        <NavBar />
        <LayoutContainer>
            <GridLayout>
                <HeaderLayout>
                    <Header />
                </HeaderLayout>
            </GridLayout>
        </LayoutContainer>
    </>
    )
}
