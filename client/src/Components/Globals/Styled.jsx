import styled from "styled-components";

export const GenericContactUsContainer = styled.div`
    height: 220px;
    width: 80%;
    margin: 50px auto;
    background-color: rgb(100,100,100);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    span{
        color: #FFDF00;
    }
    text-align: center;
`

export const HelpNavigator = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    justify-items: stretch;
    /* gap: 20%; */
    padding: 5px 0;
    margin-top: 10px;
    cursor: pointer;
`