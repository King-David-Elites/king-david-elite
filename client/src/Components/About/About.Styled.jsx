import styled from "styled-components"

export const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: ${({padding})=> padding || "47px"};
`

export const GlobalContainer = styled.div`
    width: ${({width})=> width};
    padding: ${({padding})=> padding};
    margin: ${({margin})=> margin};
`

export const StackedImage = styled.div`
    width: ${({width})=> width || "100px"};
    height: ${({height})=> height || "180px"};
    display: grid;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;
    align-content: center;
    img{
    width: ${({width})=> width || "100px"};
    height: ${({height})=> height || "180px"};
    border-radius: ${({radius})=> radius};
    
    }
    position: relative;
`

export const AbsoluteImage = styled.div`
    width: ${({width})=> width || "100px"};
    height: ${({height})=> height || "180px"};
    border-radius: ${({radius})=> radius};
    position: absolute;
    background: ${({color})=> color || "black"};
    top: ${({top})=> top };
    left: ${({left})=> left };
    right: ${({right})=> right };
    bottom: ${({bottom})=> bottom };
    z-index: -1;
`