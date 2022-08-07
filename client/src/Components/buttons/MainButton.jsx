import styled from 'styled-components';
import theme from '../../application/utils/Theme';

const MainButton = styled.button`   
  width: ${props => props.width ? props.width : "65px"};
   height: ${props => props.height ? props.height : "25px"};
   font-weight: 700;
    font-size: ${props => props.fontSize ? props.fontSize : "0.7em"};
    line-height: 0.8em;
    color: ${props => props.color ? props.color : theme.textColor};
  background-color: ${theme.color};
    border: 2px solid ${theme.color};
    border-radius: 6px;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 16px;
    font-family: ${theme.fontFamily};
    cursor:pointer;    

@media (min-width: ${theme.breakPoint['tablet']}) {
            width: ${props => props.width ? props.width : "88px"};
            height: ${props => props.height ? props.height : "40px"};
            font-size: ${props => props.fontSize ? props.fontSize : "0.8em"};
            background-color: ${props => props.background ? props.background: theme.color};
            border: 2px solid ${props => props.border ? props.border : theme.color};
            letter-spacing: 0.1em;    
            border-radius: 0.5em;  
            margin-top:${props => props.marginTop ? props.marginTop : "0em"}      
        }
`;

const MainOutlineButton = styled(MainButton)`
    color: ${props => props.color ? props.color : theme.color};
    background: rgba(0,0,0,0.0);
  border-radius: 6px;  
`;

export default MainButton;
export { MainOutlineButton };