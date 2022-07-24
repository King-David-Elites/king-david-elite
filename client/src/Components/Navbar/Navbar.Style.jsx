import styled from 'styled-components'
import theme from '../../application/utils/Theme';

export const Header = styled.div`    
    top:0;
    color: ${theme.color};
    postition:fixed;
    padding:0em 2em;    
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: ${theme.fontFamily}; 
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
export const ULI = styled.ul`    
    font-size:0.8rem;   
    display:None;
    position:absolute;
    left:0;
    top:4.2em;
    justify-content:center;
    align-items:center;
    gap:5em;        
    list-style-type:None;  
    color:${theme.textColor};        
`

export const LI = styled.li`    
    font-weight:light;           
    padding: 1.5em 0em; 
    cursor:pointer;             
    &:hover ${ULI}{        
        width:100%;
        display:flex;                
        background:rgba(0,0,0,0.7);  
        cursor:auto;      
    };    
    &:hover{
        color:${theme.color};
    }  
`

export const LogoText = styled.div`
    color: ${theme.color};
    font-size:1.2rem;   
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