import styled from "styled-components"
import theme from '../../application/utils/Theme';

export const FooterSection = styled.div`
    background:${theme.blackBackgroundColor};
    width:100%;
    padding:2em;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:${theme.footerColor}
`