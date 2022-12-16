import styled from "styled-components";
import theme from "../../application/utils/Theme";

export const VerificationContainer = styled.div`

 /* height: 400px; */
   
    @media (min-width: ${theme.breakPoint['tablet']}) {
        /* height: 1000px; */
        }

    .container{
        display: block;
        margin: 20px;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            display: none;
        }
    }

    .verification-wrapper>h3 {
    font-weight: 700;
    font-size: 20px;
    /* margin: 1.5em 0em 0em 1.5em; */
}

.line {
    margin-top: 1em;
    background: #ECEDEE;
    height: 2px;
}

.personal-details {
    display: flex;
    gap: 0.8em;
    align-items: center;
    margin: 2em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin: 0em 4em;
    }
}

.verification {
    font-size: 16px;
    /* line-height: 18px; */
    display: flex;
    flex-direction: column;
    /* margin: 1.4em 0em 0em 4.5em; */

    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin:1em 6em;
    }

}

.list-item{
    color: #696969;
    margin-left: 2em;
    margin-top: 1em;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
}

.list-item > button{
   display: none;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: block;
        cursor: pointer;
        float: left;
        width:  10em;
        padding: 12px 16px;
        color: ${theme.footerColor};
        background: ${theme.color};
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        border: none;
        border-radius: 4px;
    }
}

.verification > p{
    color: #0D0D0D;
    font-weight: 600;
    /* line-height: 25px; */
}

.verification-wrapper > button{
    color: white;
    padding: 12px 16px;
    background: #2301F3;
    border: none;
    outline: none;
    border-radius: 4px;
    width: 100px;
    /* margin:2em 0em 0em 4em; */
    cursor: pointer;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: none;
    }
}

`

export const DesktopContainer = styled.div`
    display: none;
   

    @media (min-width: ${theme.breakPoint['tablet']}) {
        /* margin: 33em 10em 0em 10em; */
        display: flex;
        width: auto;
        height: 50em;
        align-items: center; 
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }  

    .leftSect{
        width: 35%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
    }

    .leftSect > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .rightSect{
        width: 65%;
        height: 30em;
        font-weight: 600;
        line-height: 25px;
    }

    .verification-text{
        padding: 0em 0em 2em 4em;
    }
`