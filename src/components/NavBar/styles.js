import styled from "styled-components";
import logo from "../../assets/logo_25w.svg"




export const NavWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 110px;
    border-bottom: 1px solid var(--unnamed-color-e0752f);

`


export const NavLeft = styled.div`
    background-image: url(${logo});
    width: 129px;
    height: 30px;    
`
export const NavRight = styled.div`
    width: 50%;
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
    }
    li{
    color: var(--unnamed-color-ffffff);
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    
    :hover{
        color: var(--unnamed-color-e0752f);
    }
    
    }
`