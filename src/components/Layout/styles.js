import styled from "styled-components";

export const LayoutContainer = styled.div`
max-width: 1366px;
max-height: 768px; 
`

export const HeaderLayout = styled.div`
grid-area: H;
`

export const AboutUsLayout = styled.div`
grid-area: Ab;
`  
export const ServicesLayout = styled.div`
grid-area: Sv;
`

export const GridLayout = styled.div`
display: grid;
grid-template:
"H" minmax(100vh,min(100vh,768px))
"Ab" 672px/
100%;
/* "Sv" 552px/ */




`
