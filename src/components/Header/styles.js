import styled from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.imageBackground}) no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`
export const HeaderTitle = styled.div`
    margin-left: 101px;
    max-width: 570px; 
    max-height: 115px; 
    text-align: left;
    margin-bottom: 39px;
    span{
        font-size: 3.5rem;
        color: white;
    }
`
export const HeaderSubTitle = styled.div`
    margin-left: 100px;
    max-width: 372px; 
    max-height: 42px; 
    text-align: left;
    span{
        font-size: 1.2rem;
        color: white;        
    }
`