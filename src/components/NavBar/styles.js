import styled from "styled-components";

export const NavWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 110px;
    border-bottom: 1px solid var(--unnamed-color-e0752f);
    background-color: ${({ scroll }) =>
        (scroll < 100 ? "transparent" : "#E0752F")
    };
`

export const NavLeft = styled.div`
    width: 129px;
    height: 30px;    
`

export const NavRight = styled.div`
    width: 50%;
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        cursor: pointer;
        color: var(--unnamed-color-ffffff)
    }
    li{
    letter-spacing: 0px;
    opacity: 1;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    }  
`