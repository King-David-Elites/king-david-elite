import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const FooterSection = styled.div`
    background:${theme.blackBackgroundColor};
    display: flex;
    flex-direction: column;
    padding: 4em 2em 2em 2em;
    font-weight:bold;
    color:#A6A6A6;
    margin-top:2em;
    gap: 2em;
    display: ${props => props.display ? props.display : "none"};
   
    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex-direction: row;
        width:100%;
        padding:3em 4em 10em 4em;
        justify-content:space-between;
        align-items:flex-start;    
        font-weight:light;
        gap: 1em;
        margin-top: ${props => props.marginTop ? props.marginTop : '2em'};
        display: ${props => props.display ? props.display : "flex"};
    }
    
    .copywrite-bigScreen{
        border: 2px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .icon-bigScreen{
        margin-top: 0.5em;
        display: flex;
        gap: 0.5em;
    }

    .border-circle-bigScreen{
        border: 2px solid #A6A6A6;
        border-radius: 50%;
        padding: 10px;
    }
    `

export const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:1em;    

    @media (min-width: ${theme.breakPoint['tablet']}) {
       justify-content:flex-start;
       align-items:flex-start;  
    }`

export const Head = styled.div`
    color:${props => props.color ? props.color : "#A6A6A6"};
    font-size:${props => props.fontSize ? props.fontSize : "1rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "700"};
    margin-bottom: 0.5em;
`
export const List = styled.div`
    color:${props => props.color ? props.color : "#A6A6A6"};
    font-size:${props => props.fontSize ? props.fontSize : "0.8rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "light"};  
    cursor:pointer;  

    &:hover{
        color:${theme.color};
        font-weight:700
    }
  
`
export const MobileFooter = styled.div`
    background:${theme.blackBackgroundColor};
    display: flex;
    flex-direction: column;
    padding: 4em 2em 2em 2em;
    font-weight:bold;
    color:#A6A6A6;
    margin-top:2em;
    gap: 2em;
    display: ${props => props.display ? props.display : "flex"};

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex-direction: row;
        width:100%;
        padding:3em 3em 10em 3em;
        justify-content:space-between;
        align-items:flex-start;    
        font-weight:light;
        margin-top:2em;
        gap: 1em;
        display: ${props => props.display ? props.display : "none"};
    }

    .copywrite{
        font-size: 10px;
        text-align: center;
        font-weight: 400;
        margin-top: 4em;
    }
    
    .footer-wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .icons{
        margin-top: 0.5em;
        display: flex;
        gap: 0.5em;
    }

    .border-circle{
       border: 2px solid #A6A6A6;
       border-radius: 50%;
       padding: 10px;
    }
`