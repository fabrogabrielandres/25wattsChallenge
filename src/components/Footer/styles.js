import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 208px;
    background: var(--unnamed-color-343434) 0% 0% no-repeat padding-box;
    background: #343434 0% 0% no-repeat padding-box;
    opacity: 1;
`
export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:750px){
        flex-direction: column;
    }
`


export const FooterLeft = styled.div`
    max-width: 170px;
    p{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 14px/var(--unnamed-line-spacing-28) var(--unnamed-font-family-roboto);
        color: var(--unnamed-color-e0752f);
        text-align: left;
        font: normal normal normal 14px/28px Roboto;
        letter-spacing: 0.2px;
        color: #E0752F;
        opacity: 1;
    }
    
`
export const FooterMid = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 100%;
   
    p{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-roboto);
        color: var(--unnamed-color-dce1da);
        text-align: left;
        font: normal normal medium 106px/210px Roboto;
        letter-spacing: 0px;
        color: #DCE1DA;
        opacity: 1;
        margin-top: 50px;
        margin-right:72px ;
    }
    
    @media (max-width:750px){
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        p{
            margin-top: 0;
        }
    }


`

export const FooterRight = styled.div`
    max-width: 274px; 
    width:100% ;
    p{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-21)/var(--unnamed-line-spacing-28) var(--unnamed-font-family-poppins);
        letter-spacing: var(--unnamed-character-spacing-0-29);
        color: var(--unnamed-color-dce1da);
        text-align: center;
        font: normal normal 600 21px/28px Poppins;
        letter-spacing: 0.29px;
        color: #DCE1DA;
        opacity: 1;
        margin-bottom: 34px;
    }
`
export const IconsContainer= styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    img{
        width: 24px;
        height: 22px;
    }
`
