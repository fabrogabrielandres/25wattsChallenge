import styled from "styled-components";



export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 664px;
    h1{
        margin:103px auto 17px auto;
    }
    h2{
        margin: 0px 299px 64px 299px;
        font-family: var(--unnamed-font-family-roboto);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-normal);
        font-size: var(--unnamed-font-size-16);
        line-height: var(--unnamed-line-spacing-28);
        letter-spacing: var(--unnamed-character-spacing-0-22);
        color: var(--unnamed-color-343434);
        @media (max-width:1100px){
        margin: 0px 30px 64px 30px;            
        }
    }
`
export const ContinerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width:1220px){
        justify-content: center;
    }
`

export const DetailsCard = styled.div`
    display: flex;
    align-items: center;
    min-height: 64px;
    height: 100%;
    max-width: 360px;
    width: 100%;
    margin:0px 35px 48px 211px;
    @media(max-width:1220px){
        margin:0px 10px 48px 10px;
    }
    p{
        margin-left: 24px;
    }

`