import styled from "styled-components";


export const LayoutContainer = styled.div`
max-width: 1366px;
max-height: 768px; 


`


export const NavLayout = styled.div`
max-width: 1366px;
max-height: 96px; 
position: fixed;
top: 0;
right: 0;
width: 100%;
height: 100%;
`

export const GridLayout = styled.div`
display: grid;
grid-template:
"H"  768px/  
12fr;
`

export const HeaderLayout = styled.div`
grid-area: H;
`
