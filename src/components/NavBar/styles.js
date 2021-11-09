import styled from "styled-components";


export const NavRight = styled.div`
    width: 50%;
    
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        color: var(--unnamed-color-ffffff);
    }
    
    li{
        letter-spacing: 0px;
        opacity: 1;
    };  
 `

export const NavLeft = styled.div`
    width: 129px;
    height: 30px;
    `

export const NavWrapper = styled.div`
    position: absolute;
    height: 100%;
    max-width: 1366px;
    height: 96px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-right: 110px;
    padding-left: 100px;
    border-bottom: 1px solid var(--unnamed-color-e0752f);
    background-color: ${({ scroll }) => (scroll < 100 ? "transparent" : "#E0752F")};
`

export const Button = styled.button`
    background-color: var(--unnamed-color-e0752f);
    max-width: 144px;
    max-height: 48px;
    border-radius: 12px;
    
`

