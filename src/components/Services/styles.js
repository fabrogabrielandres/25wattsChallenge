import styled from "styled-components";



export const ServicesWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 552px;
    display: flex;
    flex-direction: column;
    background: #F2F4F1 0% 0% no-repeat padding-box;    
`


export const TitleService = styled.div`
        margin-top: 104px;
    h1{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-39)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0-55);
        color: var(--unnamed-color-343434);
        text-align: center;
        font: normal normal 600 39px/45px Poppins;
        letter-spacing: 0.55px;
        color: #343434;
        opacity: 1;
    }
`

export const SubTitleService = styled.div`    
    margin: 17px 295px;
    @media (max-width:1100px){
        margin: 17px 80px;
    }
    h2{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-28) var(--unnamed-font-family-roboto);
        letter-spacing: var(--unnamed-character-spacing-0-22);
        color: var(--unnamed-color-343434);
        text-align: center;
        font: normal normal normal 16px/28px Roboto;
        letter-spacing: 0.22px;
        color: #343434;
        opacity: 1;
    }
`

export const CardService = styled.div`
    max-width: 206px;
    min-height: 142px;
    width: 100%;
    height: 100%;
    margin-top: 80px;
`

export const IconsService = styled.div`
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    img{
        margin: 0px 81px;
    }
    h1{
        margin-top: 37px;
        text-align: center;
        font-size: 1.7rem;
        margin-bottom: 20px;
    }

`
