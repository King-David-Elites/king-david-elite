import styled from "styled-components"
import theme from "../../application/utils/Theme"

export const Wrapper = styled.div`

    padding: 3em 2em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
      padding: 3em 8em;
    }  

    .bold-text{
        font-weight: 700;
        font-size: 23px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #000000;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            font-size: 28px;
            line-height: 25px;
            letter-spacing: 0.05em;
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
        margin-top: 2em;
    }

    .account-component{
        opacity: 59%;
    }

    .form-body{
        display: flex;

        @media (min-width: ${theme.breakPoint['tablet']}) {
        
        }  
    }

    .blue-text{
        color: ${theme.blueText};
        font-weight: 500;
        font-size: 20px;
        line-height: 6em;
        letter-spacing: 0.05em;
        cursor: pointer;

        @media (min-width: ${theme.breakPoint['tablet']}) {
            letter-spacing: 0.02em;
            font-weight: 700;
            line-height: 8em;
        }  
    }
`