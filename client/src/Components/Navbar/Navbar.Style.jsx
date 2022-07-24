import styled from 'styled-components'
import theme from '../../application/utils/Theme';

export const Header = styled.div`    
    top:0;
    postition:fixed;
    padding:1em 2em;    
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: ${theme.fontFamily}; 
`

export const UL = styled.ul`
    color: ${theme.color};
    font-size:0.8rem;   
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2em;
    font-weight:bold;
    list-style-type:None;   
`
export const ULI = styled.ul`
    color: ${theme.color};
    font-size:0.8rem;   
    display:None;
    position:absolute;
    left:0;
    top:6em;
    justify-content:center;
    align-items:center;
    gap:1em;    
    list-style-type:None;    
`

export const LI = styled.li`    
    font-weight:light;    
    cursor:pointer;      
    &:hover ${ULI}{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5em;
        padding:1.5em 0em;
        background:rgba(0,0,0,0.5);
    }       
`

export const LogoText = styled.div`
    color: ${theme.color};
    font-size:1.2rem;   
    font-weight:bolder;    
`

export const Brand = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:0.5em;    
`