import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const Background =styled.div`        
    background-image:url(${props => props.imageUrl});
    background-position:center;
    background-size:100%;
    background-repeat:no-repeat;    
    width:100vw;
    height:45em;
`

export const HeroSection = styled.div`
    background:rgba(0,0,0,0.4);
    font-family:${theme.fontFamily};
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1em;
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
    padding:1em;        
`
export const Search = styled(SearchSection)`
    flex:0 1 20em;
    background:rgb(255,255,255,0.7);
    padding:0.5em;
    border-radius: 0.5em;
`;
export const Input = styled.input`    
    background:transparent;
    outline:None;
    padding:0.5em;
    border: 2px solid transparent;
`