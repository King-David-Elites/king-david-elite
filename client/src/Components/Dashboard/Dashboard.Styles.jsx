import styled from "styled-components"

export const DashboardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;

`

export const LeftContainer = styled.div`
    background-color: white;
    padding: 20px 10px;
    border-right: 1px solid lightgray;
    /* background-color: red; */
    min-height: 100vh;

    .top_logo{

        padding: 10px 3px ;
    }

    .nav_items{
        display: grid;
        margin: 60px 0;
        /* gap: 20px; */

        .item{
            display: flex;
            gap: 10px;
            cursor: pointer;
            color: #252625;
            padding: 10px 20px;
            border-radius: 8px;
            transition: .3s;
        }

        .item:hover{
            background-color: #252625;
            color: white;
        }
    }
`

export const RightContainer = styled.div`
    
`

