import styled from "styled-components"
import theme from "../../application/utils/Theme"

export const Wrapper = styled.div`
     margin: 25px auto;
     width: 80%;
     padding-bottom: 50px;
     /* height: 100px; */
   
    @media (min-width: ${theme.breakPoint['tablet']}) {
        /* height: 400px; */
        }


    @media (min-width: ${theme.breakPoint['tablet']}) {
      /* margin: 33em 10em 0em 10em; */
    }  

    .bold-text{
        font-weight: 700;
        font-size: 23px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #000000;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-size: 28px;
            /* line-height: 25px;
            letter-spacing: 0.05em; */
        }  
    }

    .neutral-text{
        margin-top: 0.8em;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #696969;
    }

    .form{
        width: 100%;
    }

    .account-component{
        opacity: 59%;

    }

    .form-body{
        display: flex;
        margin-top: 2em;

        @media (min-width: ${theme.breakPoint['tablet']}) {
         
        }  
    }

    .blue-text{
        color: ${theme.blueText};
        font-weight: 500;
        font-size: 18px;
        /* line-height: 6em; */
        /* letter-spacing: 0.05em; */
        cursor: pointer;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            /* letter-spacing: 0.02em; */
            font-weight: 700;
            /* line-height: 8em; */
        }  
    }

    .text-wrapper{
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-top: 1em;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            flex-direction: row;
        }
    }

    .label{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        opacity: 49%;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            flex: 1;
        }
    }

    .label > label{
        white-space: nowrap;
    }

    .label > input{
        height: 35px;
        border-radius: 4px;
        border: 2px solid  gray;

    }

    .error{
        color: red;
        opacity: 49%;
    }

    .create{
        padding: 0.5em 2em;
        border-radius: 4px;
        border: none;
        background: ${theme.blueText};
        color: #fff;
        /* margin-top: 4em; */
        margin: 10px 0;
        cursor: pointer;
        width: 5em;
        display: flex;
        justify-content: center;
       

        @media (min-width: ${theme.breakPoint['tablet']}) {
          font-size: 17px;
        }  
    }
`