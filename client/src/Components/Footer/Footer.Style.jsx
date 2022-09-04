import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const FooterSection = styled.div`
    background:${theme.blackBackgroundColor};
    width:100%;
    padding:3em 3em 10em 3em;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;    
    font-weight:light;
    color:${theme.footerColor};
    margin-top:2em;

`

export const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:1em;  
    
    @media(max-width:650px){
        margin-left:5px;
    }
`

export const Head = styled.div`
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "1rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "700"};  
    
    @media(max-width:650px){
        font-size:15px;
        margin-right:20px;
    }
`
export const List =styled.div`
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "0.8rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "light"};        
    cursor:pointer;  
    &:hover{
        color:${theme.color};
        font-weight:700
    }

    @media(max-width:650px){
        font-size:10px;
        padding-top:0px;
    }
`