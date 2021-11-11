import styled from "styled-components";
import image from "../../assets/image.png"


export const ContactWrapper = styled.div`
    width: 100%;
    min-height: 768px;
    
    background-image: url(${image}), linear-gradient(to right,#F2F4F1 70%,#DCE1DA 30%);
    
    background-repeat: no-repeat;
    background-position:70% 50%;
    @media (max-width:900px){
        background-size:  0px 0px;

    }
    @media (max-width:700px){
        background-size:  0px 0px;
    }
    

    
    p{  
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-39)/var(--unnamed-line-spacing-45) var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0-55);
        color: var(--unnamed-color-343434);
        text-align: left;
        font: normal normal 600 39px/45px Poppins;
        letter-spacing: 0.55px;
        color: #343434;
        padding:120px 0px 0px 101px;
    }
    p:nth-child(2){
        padding: 0;
        margin: 0px 0px 75px 101px;
        color: var(--unnamed-color-e0752f);
        color: #E0752F;    
    }
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 471px;
    margin-left: 101px;
    
    input{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);
        letter-spacing: var(--unnamed-character-spacing-0-22);
        color: var(--unnamed-color-5f6368);
        text-align: left;
        letter-spacing: 0.22px;
        color: #5F6368;
        opacity: 1;
        height: 33px;
        margin-bottom: 31px;
        border:none;
        border-bottom: 2px solid grey;
        background-color: transparent;
        color: #E0752F;
        :focus{
        color: #E0752F;
        border:none;
        border-bottom: 3px solid #E0752F ;
        }
    }
    
    input:nth-child(4){
        height: 73px;
        margin-bottom: 40px;

    }
`