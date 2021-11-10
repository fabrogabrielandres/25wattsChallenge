import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 88px;
`

export const AboutWrapper = styled.div`
    background-color:var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    height: 100%;
    width: 100%;
`
export const AboutImage = styled.div`
border-left: 24px solid var(--unnamed-color-e0752f);
    img{
        margin-left: 195px;
        max-width: 376px;
    }
    @media (max-width:950px){
        img{
            margin: 0px center;
            max-width: 280px;
            width: 100%;

        }
    }
    @media (max-width:450px){
        img{
            margin: 0;            
            max-width: 250px;
            width: 100%;
        }
    }
`

export const AboutDescription = styled.div`
width: 50%;
    h1{
    margin-top: 39px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-39)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
    letter-spacing: var(--unnamed-character-spacing-0-55);
    color: var(--unnamed-color-343434);
    font: normal normal 600 39px/45px Poppins;
    letter-spacing: 0.55px;
    color: #343434;
}
    h2{
        margin-right: 269px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-39)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0-55);
        color: var(--unnamed-color-e0752f);
        font: normal normal 600 39px/45px Poppins;
        letter-spacing: 0.55px;
        color: #E0752F;
    }
    h3{ 
        margin-right: 200px;
        margin-top: 44px;
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-28) var(--unnamed-font-family-roboto);
        letter-spacing: var(--unnamed-character-spacing-0-22);
        color: var(--unnamed-color-343434);
        font: normal normal normal 16px/28px Roboto;
        letter-spacing: 0.22px;
        color: #343434;
        opacity: 1;
    }
    @media (max-width:1200px){
        width: 100%;
        h1, h2, h3{
            margin: 10px 10px;
            text-align: center;
        }
    }
    @media (max-width:450px){
        width: 100%;
        max-height: 1000px;
        h1, h2, h3{
            margin: 10px 10px;
            text-align: center;
        }
    }
`


