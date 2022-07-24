import styled from 'styled-components';
import theme from '../../application/utils/Theme';

const MainButton = styled.button`   
  width: 65px;
   height: 25px;
   font-weight: 700;
    font-size: 0.7em;
    line-height: 0.8em;
    color: ${props => props.color ? props.color : theme.textColor};
  background-color: ${theme.color};
    border: 2px solid ${theme.color};
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 16px;
    font-family: ${theme.fontFamily};
    cursor:pointer;

@media (min-width: ${theme.breakPoint['tablet']}) {
            width: 88px;
            height: 40px;
            font-size: 0.8em; 
            letter-spacing: 0.1em;            
        }
`;

const MainOutlineButton = styled(MainButton)`
    color: ${props => props.color ? props.color : theme.color};
   background-color: ${theme.textColor};
  border-radius: 8px;  
`;

export default MainButton;
export { MainOutlineButton };