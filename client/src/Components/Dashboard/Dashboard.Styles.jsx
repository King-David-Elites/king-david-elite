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
        padding:  3px ;
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        cursor: pointer;
    }

    .nav_items{
        display: grid;
        gap: 10px;
        margin: 60px 0;
        /* gap: 20px; */

        .item{
            display: flex;
            gap: 10px;
            font-size: 14px;
            cursor: pointer;
            color: #252625;
            padding: 7px 17px;
            border-radius: 8px;
            transition: .3s;
        }

        .active{
            background-color: #252625;
            color: white;
        }

        .item:hover:not(.active){
            background-color: #EEF0F1;
            
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

    .mainContent{
        padding: 20px;
    }
`

export const MessagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 3fr;
    background-color: white;
    border-radius: 8px;
    height: 80vh;

    .listOfMessages{
        border-right: lightgray;
        padding: 10px 20px;
        /* background-color: red; */
        border-radius: 8px 0 0 8px;
        
        .title{
            padding: 10px 20px;
            text-align: center;
        }

        img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
        }

        .messages{
            display: grid;
            
        }

        .message{
            display: flex;
            gap: 10px;
            padding: 10px 0;

            h5{
                font-size: 14px;
            }

            p{
                font-size: 12px;
                color: #737373;
            }
        }
    }
`

export const NotificationContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    height: 80vh;
    padding: 20px 0;

    .notification{
        padding: 10px 50px;
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        border-bottom: 1px solid gray;
    }

    .content{
        .title{
            font-weight: 600;
            font-size: 14px;
        }

        .sub{
            font-weight: 500;
            font-size: 12px;
            color: #737373;
        }
    }

    .time{
        font-size: 12px;
    }
  
`

export const GenericContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    height: 80vh;
`

export const Leftwallet = styled.div`

position: absolute;
width: 520px;
height: 369px;
left: 277px;
top: 110px;
background: linear-gradient(180deg, #0D0D0D 0%, #0D0D0D 100%);
backdrop-filter: blur(40px);
border-radius: 8px;

h4{
    width: 117px;
    height: 17px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #FFDF00;
    margin-top:42px;
    margin-left:43px;
}

h2{
    margin-top:24px;
    margin-left:38px;
    width: 141px;
    height: 29px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
}

div{
    display:flex;
    margin-top:140px;
    margin-left:43px;

    button{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 40px;
        gap: 10px;
        margin-right:10px;
        width: 135px;
        height: 40px;
        background: #A6A6A6;
        border-radius: 4px;
    }

    // .transfer{
    //     background: #FFDF00;
    // }
}

p{
    width: 175px;
    height: 19px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    margin-top:12px;
    margin-left:33px;
}

`

export const Rightwallet = styled.div`



`



export const Bottom = styled.div`

position: absolute;
width: 1003px;
height: 442px;
left: 277px;
top: 502px;
background: #FFFFFF;
border-radius: 8px;

 table{
    width:100%;  
}

td{
    padding:10px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    text-align: center;
}

table,td,tr{
    border-collapse:collapse;
    border-bottom:0.01px solid black;
}



`