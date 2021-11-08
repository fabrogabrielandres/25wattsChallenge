const { createGlobalStyle } = require("styled-components");


export default createGlobalStyle`


*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    height: 100%;
}

body{
    min-height: 100%;
}


:root {

    /* Colors: */
    --unnamed-color-e0752f: #E0752F;
    --unnamed-color-7f9178: #7F9178;
    --unnamed-color-dce1da: #DCE1DA;
    --unnamed-color-f2f4f1: #F2F4F1;
    --unnamed-color-ffffff: #FFFFFF;
    --unnamed-color-5f6368: #5F6368;
    --unnamed-color-343434: #343434;
    
    /* Font/text values */
    --unnamed-font-family-poppins: Poppins;
    --unnamed-font-family-roboto: Roboto;
    --unnamed-font-style-normal: normal;
    --unnamed-font-weight-600: 600px;
    --unnamed-font-weight-medium: medium;
    --unnamed-font-weight-normal: normal;
    --unnamed-font-size-16: 16px;
    --unnamed-font-size-21: 21px;
    --unnamed-font-size-39: 39px;
    --unnamed-font-size-48: 48px;
    --unnamed-character-spacing-0-29: 0.29px;
    --unnamed-character-spacing-0-55: 0.55px;
    --unnamed-character-spacing-0-67: 0.67px;
    --unnamed-character-spacing-0-22: 0.22px;
    --unnamed-line-spacing-21: 21px;
    --unnamed-line-spacing-28: 28px;
    --unnamed-line-spacing-45: 45px;
    --unnamed-line-spacing-48: 48px;
}
    
/* Character Styles */
.unnamed-character-style-1 {
    font-family: var(--unnamed-font-family-poppins);
    font-style: var(--unnamed-font-style-normal);
    font-weight: var(--unnamed-font-weight-600);
    font-size: var(--unnamed-font-size-48);
    line-height: var(--unnamed-line-spacing-48);
    letter-spacing: var(--unnamed-character-spacing-0-67);
    color: var(--unnamed-color-343434);
}
    .unnamed-character-style-2 {
        font-family: var(--unnamed-font-family-poppins);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-600);
        font-size: var(--unnamed-font-size-39);
        line-height: var(--unnamed-line-spacing-45);
        letter-spacing: var(--unnamed-character-spacing-0-55);
        color: var(--unnamed-color-343434);
    }
    .unnamed-character-style-3 {
        font-family: var(--unnamed-font-family-poppins);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-600);
        font-size: var(--unnamed-font-size-21);
        line-height: var(--unnamed-line-spacing-28);
        letter-spacing: var(--unnamed-character-spacing-0-29);
        color: var(--unnamed-color-343434);
    }
    .unnamed-character-style-4 {
        font-family: var(--unnamed-font-family-roboto);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-medium);
        font-size: var(--unnamed-font-size-16);
        line-height: var(--unnamed-line-spacing-21);
        letter-spacing: var(--unnamed-character-spacing-0-22);
        color: var(--unnamed-color-343434);
    }
    .unnamed-character-style-5 {
        font-family: var(--unnamed-font-family-roboto);
        font-style: var(--unnamed-font-style-normal);
        font-weight: var(--unnamed-font-weight-normal);
        font-size: var(--unnamed-font-size-16);
        line-height: var(--unnamed-line-spacing-28);
        letter-spacing: var(--unnamed-character-spacing-0-22);
        color: var(--unnamed-color-343434);
    }
`