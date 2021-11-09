import styled from "styled-components";

export const Button = styled.button`
        background-color: var(--unnamed-color-e0752f);
        display: none;
        
`
export const NavRight = styled.div`
    width: 50%;
    ul{ 
        height: 21px;
        display: flex;
        justify-content: space-around;
        list-style: none;
        color: var(--unnamed-color-ffffff);
    }
    li{
        font-size: var(--unnamed-font-size-16);
        cursor: pointer;
        letter-spacing: 0px;
        opacity: 1;
    };  
    `

export const NavLeft = styled.div`
    max-width: 129px;
    max-height: 30px;
    width: 100%;
    height: 100%;
`

export const NavWrapper = styled.div`
    /* overflow: hidden; */
    position: fixed;
    top:0;
    right: 0;
    max-width: 1366px;
    max-height: 96px; 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 110px;
    padding-left: 100px;
    border-bottom: 1px solid var(--unnamed-color-e0752f);
    background-color: ${({ scroll }) => (scroll < 100 ? "transparent" : "#E0752F")};

    @media (max-width:950px){
            padding-right: 20px;
            padding-left: 20px;
            ${Button}{
                display: block;
            }
            ${NavRight}{
                transition: all 1s ease-in-out;
                position: absolute;
                top: 96px;
                left: ${({toggle})=> toggle ? 0 : "-100%"};  
                width: 100%;
                ul{
                    height: 100%;
                    flex-direction: column;
                    text-align: center;
                }    
                li{ 
                    background-color: var(--unnamed-color-7f9178);
                    padding-top: 12px;
                    color:  var(--unnamed-color-e0752f);
                    font-weight: 900;
                }
            }
        }
`