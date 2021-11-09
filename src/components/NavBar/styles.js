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

    @media (max-width:900px){
        ${NavRight}{
            background-color: grey;
            position: fixed;
            width: 100%;
            top: 96px;
            left: 0;            
            ul{
                flex-direction: column;
                align-items: center}
            li{
                margin-top: 1rem;
                color: var(--unnamed-color-e0752f);
            }}
    }
`


export const Button = styled.button`
  display: block;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  margin-left: 20%;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;