import styled from 'styled-components'
import theme from '../../application/utils/Theme';

export const Header = styled.div`    
    padding-top: 0.5em;    
    position:${(prop) => prop.sticky || "fixed"};                
    width:100%;
    color:${theme.textColor};
    background-color: ${(prop) => prop.bg || "rgba(0,0,0,0.2)"};
    display:flex;
    justify-content:space-around;
    align-items:center;
    gap:0.2em;
    font-family: ${theme.fontFamily}; 
    z-index:3;
    white-space: nowrap;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex-direction:row;
        align-items:center;
        gap:1em;
    }
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
    font-size:0.6rem;   
    font-weight:500;    
    cursor:pointer;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        color: ${theme.color};
        font-size:1rem;   
        font-weight:700;    
        cursor:pointer;
        }
`

export const Brand = styled.div`
    .dashboard{
        display:none;
    }

    .dashboardIcon{
        display: flex;
        justify-content: center;
        align-items: center;    
        flex-direction: column;
        position: fixed;
        bottom: 0;
        right: 40%;
        z-index: 10;
        background-color: black;
        transform: translateY(-25px);
        border-radius: 100px;
        color: white;
        border: 6px solid #EEF0F2;
        padding: 0.8em;
    }

    .text{
        font-size: 12px;
        opacity: 1;
        letter-spacing: 0.05em;
        font-weight: bold;
        position: relative;
        display: block;
        transform: translateY(-20px);
    }

    @media (min-width: ${theme.breakPoint['tablet']}) {
    display:flex;
    justify-content: center;
    align-items: center;
    gap:1em;    
    font-weight:700;
    cursor: pointer;

    .dashboard{
        display:flex;
        justify-content: center;
        align-items: center;
        gap:1em;
        font-weight:700;
        cursor: pointer;
    }

    .dashboardIcon{
        display: none;
    }
    } 
`