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
`

export const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    gap:1em;    
`
export const Text =styled.div`
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "0.8rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "light"};    
    margin:${props => props.margin ? props.margin : "0em"};    
    padding:${props => props.padding ? props.padding : "0em"};  
    cursor:pointer;  
`