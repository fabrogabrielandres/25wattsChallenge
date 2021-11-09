import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.imageBackground}) no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: start;
    align-items: flex-end;
`

export const HeaderTitle = styled.div`
    margin-left: 101px;
    margin-bottom: 300px;
    max-width: 570px; 
    max-height: 115px; 
    text-align: left;
    h3{
        font-size: 3.5rem;
        color: white;
    }

`