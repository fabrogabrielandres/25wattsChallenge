import styled from "styled-components";
import image from "../../assets/image.png"


export const ContactWrapper = styled.div`
    width: 100%;
    min-height: 768px;
    height: 100%;
    background: linear-gradient(to right,#F2F4F1 70%,#DCE1DA 30%);
    position: relative;
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
        margin: 0px 0px 0px 101px;
        color: var(--unnamed-color-e0752f);
        color: #E0752F;    
    }
`

export const ContacAvatar = styled.div`
    display: flex;
    flex-shrink: 1;
    max-height:400px ;
    max-width: 594px; 
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 7.4%;
    margin-top:15%;
    background-image: url(${image});
    background-size: cover; 
    background-repeat: no-repeat;
    background-size: cover;
`