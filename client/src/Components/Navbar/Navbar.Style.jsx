import styled from 'styled-components'
import theme from '../../application/utils/Theme';

export const Header = styled.div`    
    padding-top: 0.5em;    
    position:${(prop)=> prop.sticky || "fixed" };                
    width:100%;
    color:${theme.textColor};
    /* background: rgba(0,0,0,0.2);             */
    background-color: ${(prop)=> prop.bg || "rgba(0,0,0,0.2)" };
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap:5em;
    font-family: ${theme.fontFamily}; 
    z-index:3;
`

export const UL = styled.ul`    
    font-size:0.8rem;   
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2em;
    font-weight:700;
    list-style-type:None;       
`

export const LI = styled.li`    
    font-weight:light;           
    padding: 1.5em 0em; 
    cursor:pointer;   
    font-size:0.8rem; 
    color:${props => props.color ? props.color : theme.textColor};    
              
    &:hover{
        color:${theme.color};
    }  

    .item-active{
        color:${theme.color};
    }
`

export const LogoText = styled.div`
    color: ${theme.color};
    font-size:1rem;   
    font-weight:700;    
    cursor:pointer;
`

export const Brand = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:1em;    
    font-weight:700;
`