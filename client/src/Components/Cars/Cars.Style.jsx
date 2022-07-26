import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const Background =styled.div`        
    background-image:url(${props => props.imageUrl});
    background-position:center;
    background-size:100%;
    background-repeat:no-repeat;    
    width:100vw;
    height:40em;
`

export const HeroSection = styled.div`
    background:rgba(0,0,0,0.4);
    font-family:${theme.fontFamily};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:inherit;
    height:inherit;
`

export const Text =styled.div`
    color:${theme.textColor};
    font-size:2rem;
    font-weight:700;    
`

export const SearchSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:5em;
    heigth:5em;
    background:blue;
`
