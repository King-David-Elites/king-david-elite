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
    background-color: #EEF0F1;

    .top{
        padding: 10px 20px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;

        .search{
            background-color: #EEF0F1;
            padding: 13px;
            border-radius: 6px;
            display: flex;
            gap: 5px;
            width: 463px;
            backdrop-filter: blur(40px);

            input{
                background-color: transparent;
                border: none;
                color: #737373;
                width: 100%;
            }

            input:focus{
                outline: none;
            }
        }

        .profile{
            display: flex;
            gap: 10px;
            align-items: center;

            img{
                width: 48px;
                height: 48px;
                border-radius: 50%;
                object-fit: cover;
            }

            .textContent{
                h6{
                    color: #000000;
                    font-size: 14px;
                }

                p{
                    color: #737373;
                    font-size: 12px;
                }
            }
        }
    }
`

export const MessagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`