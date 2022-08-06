import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const Background =styled.div`       
    background-image:url(${props => props.imageUrl});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;    
    width:100vw;
    height:40em;
`

export const MorePic = styled(Background)`       
    width:18em;
    height:250px;    
`
export const MoreBg = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;    
    width:100%;
    height:100%;    
    background:rgba(255,255,255,0.5);
    cursor:pointer;
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
    color:${props => props.color ? props.color : theme.textColor};
    font-size:${props => props.fontSize ? props.fontSize : "1rem"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "light"};    
    margin:${props => props.margin ? props.margin : "0em"};    
    padding:${props => props.padding ? props.padding : "0em"};    
`

export const SearchSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1em;
    padding-top: 2em;  
    width:100%;      
`
export const SearchC = styled(SearchSection)`    
    flex: 0 1 25em;
    background:rgb(255,255,255,0.7);
    padding:0.5em 1em;
    border-radius: 0.5em;
    justify-content: space-between;
`

export const Input = styled.input`    
    background:transparent;
    outline:None;
    padding:0.5em;    
    border: 2px solid transparent;
    width: 80%;    
`

export const FilterBox = styled(SearchC)`
    flex:0 1 0;
    padding:0.4em;
    background:${theme.color};
    justify-content:center;
    gap:0em;
`

export const Body = styled.div`    
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:2em;
    margin-top:4em;    
    gap:3em;    
`

export const CarTypes = styled.div`
    display:flex;
    justify-content:center;  
    align-items:center;  
    gap:1.5em;
    padding:0.5em;    
    flex-wrap:wrap;
    width:100%;
`

export const CarType = styled.div`
    flex: 1 1 18em;    
    display:flex;
    flex-direction:column;    
    justify-content:center;    
    align-items:flex-start;
    gap:0.2em;    
    margin:1em 0em;
`

export const Dealer = styled(SearchSection)`
    padding:0em;
    justify-content:flex-start;
`

export const PicDealer = styled.img`
    width:${props => props.width ? props.width : "2.5em"};
    height:${props => props.height ? props.height : "2.5em"};
    border-radius:${props => props.radius ? props.radius : "2.5em"};    
`

export const PicCar = styled(Background)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:13em;    
    border-top-left-radius:2em;
    border-bottom-right-radius:2em;
    margin:1em 0em;
    padding:1em 0em 0em 1em;
`

export const Position = styled(Dealer)`
    gap:0.5em;
`

export const Reaction = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:${props => props.width ? props.width : "2em"};
    height:${props => props.height ? props.height : "2em"};
    border-radius:${props => props.radius ? props.radius : "2em"};
    background:rgba(255,255,255,0.4);   
    padding:${props => props.padding ? props.padding : "0em"};
    border-bottom-right-radius:2em;
    cursor:pointer;
`

export const LuxuryLabel = styled(Background)`    
    height:10em;
`

export const LuxuryBody = styled(HeroSection)`
    background:rgba(0,0,0,0.7);
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
`