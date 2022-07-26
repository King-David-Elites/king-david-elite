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
    font-size:${props => props.fontSize ? props.fontSize : "1rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "light"};    
`

export const SearchSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1em;
    padding-top: 2em;  
    width:100%;      
`
export const Search = styled(SearchSection)`    
    flex: 0 1 25em;
    background:rgb(255,255,255,0.7);
    padding:0.5em;
    border-radius: 0.5em;
    justify-content: space-between;
`;
export const Input = styled.input`    
    background:transparent;
    outline:None;
    padding:0.5em;
    padding-left:1em;
    border: 2px solid transparent;
    width: 80%;    
`

export const FilterBox = styled(Search)`
    flex-basis:0;
    padding:0.4em;
    background:${theme.color};
    justify-content:center;
`