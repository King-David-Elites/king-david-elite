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

    .list-items{
        display: flex;
        align-items: center;
        gap: 1em;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
    }

    .list-item2{
        margin-top: 2em;
    }

    .line{
        background-color: gray;
        height: 1px;
        opacity: 0.5;
        margin: 0.5em;
    }

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex-direction:row;
        align-items:center;
        gap:1em;

        .navigation{
            display: none;
        }
    }

    .navigation{
        position: fixed;
        min-width: 70%;
        top: 0;
        right: -100%;
        height: 100%;
        background-color: #fff;
        transition: 1s ease;
   }

   .navigation.active{
        top: 1px;
        right: 0;
        transition: 1s ease;
   }

   .closed{
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: flex-end;
   }

   .navigation ul{
        display: flex;
        flex-direction: column;
        margin: 1em;
   }

   .navigation ul li{
       margin-block: 0.5em;
       list-style: none;
       color: #000;
   }

   .navigation ul li a{
        text-decoration: none;
        font-size: 17px;
        color: #000;
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
    
    
    @media(max-width:480px){
        display:none;
    }
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

    @media(max-width:650px){
        float:right;
        font-size:1.2rem;
    }
`

export const Brand = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;

    .dashboard{
        display:none;
    }
 
    .menu-icon{
       cursor: pointer;
   }

   .menu-icon .menu{
        display: block;
   }

    .text{
        font-size:12px;
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
        width: 0;

    .dashboard{
        display:flex;
        justify-content: center;
        align-items: center;
        gap:1em;
        font-weight:700;
        cursor: pointer;
    }

    .menu-icon{
        display: none;
    }

    }
    
    /* @media(max-width:480px){
        .login{
            display:none;
        }

    } */
`

export const Login = styled.div`
    display:none;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: block;
    }
`