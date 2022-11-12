import styled from "styled-components"
import theme from "../../application/utils/Theme"

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
        padding:3px;
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
    border-radius: 8px;
    height: 115vh;
    padding: ${props => props.padding ? props.padding : "0em"};
    display: ${props => props.display ? props.display : "block"};
`

// Dashboard profile code section

export const ProfileContainer = styled.div`
    border-radius: 8px;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:flex-start;

    .leftSection{
        width:40%;
        height:100%;
        border-radius:8px 0px 0px 8px;
    }
    .leftSection > .domiProfile{
        width:100%;
        height:100%;
    }
    .domiProfile img{
        width:100%;
        height:100%
    }
    .rightSection{
        width:60%;
        height:100%;
        background:white;
        border-radius:0px 8px 8px 0px;
        overflow-y:scroll
    }
    .rightSection > .closeField{
        width:100%;
        padding:1em 2em 0em 0em;
        display:flex;
        justify-content:flex-end;
    }
    .closeBtn{
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        background:white;
        border-radius:0px 8px 8px 0px;
        overflow-y:scroll;
    }
`
export const Form = styled.form`
    width:100%;
    padding:3em 3em 2em 3em;    
    
    .id-v{        
        margin:0.5em;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0.5em;
        p{
            font-size:0.8rem;
            color:gray;
        }        
    }
    .id_info {
        color:gray;
        font-size:0.8rem;
        padding-top:2em;
    }
    #verify{
        padding-top:0.5em;
        font-size:0.9rem;
    }
    .region{
        font-size:0.8rem;
        padding-top:2em;
    }
    .region select{
        width:100%;
        border-radius:8px;
        cursor:pointer;
        padding:1em;
        margin-top:0.5em;  
        font-weight:bolder;      
    }
    .region select:focus{
        border:2px solid black;
    }
    .details{
        margin-top:3em;
    }
    #veri_details{
        margin-top:0em;
    }
    .details > .title{
        display:flex;
        gap:1em;

        #tag{
            background:#EEF0F1;
        }
    }
    .details > .title .tag{
        width:1.5em;
        height:1.5em;
        border-radius:0.75em;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#F2BE5C;
        font-weight:bolder;
    }
    .details ul{
        font-size:0.8rem;
        color:gray;
        margin-left:3em;
    }
    .details ul li{
        margin:0.5em;
    }
    #button{
        margin-top:1em;
    }
    .button{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:5em;
        width:100%;
        background:#F2BE5C;
        padding:0.8em;
        font-size:1rem;
        font-weight:bolder;
        border:2px solid #F2BE5C;
        border-radius: 8px;
        cursor:pointer
    }
    .formField{
        padding-top:2em;
        width:100%;

        #id_section{
            gap:1.5em;
        }
        #id_section_veri{
            gap:0.5em;
        }
        .upload{
            padding:1em;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:1em;
            .uploading{
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap:wrap;
                gap:5em;
            }
            .uploading > .pages{
                width:10em;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .pages img{
                width:100%;
                height:auto;
            }
            .uploading > .uploadType{
                width:10em;
                display:flex;
                flex-direction:column;
                gap:0.5em;
                justify-content:center;
                align-items:flex-start;                                
            }
            .uploadType > .load{
                width:100%;
                padding:0.5em;
                display:flex;
                justify-content:center;
                align-items:center;
                background:#EEF0F1;
                border-radius:0.3em;
                color:gray;
                gap:0.5em;
            }
            p{
                color:gray;
                font-size:0.8rem;
            }
        }
    }    
    .formField > .section{
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding-top:1em;
        flex-wrap:wrap;
        gap:3em;

        .id_type{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap:1em;
            padding:0.5em;
            padding-left:1em;
            flex: 0 1 30em;
            background:#EEF0F1;
            border-radius:8px;
            color: #737373;
            cursor:pointer;
        }
        .id_type:hover{
            background:#F2BE5C;
        }
        .id_type > .lsc{
            display:flex;
            justify-content:center;
            align-items:center;
            width:25px;
            height:auto;
            margin:0.5em 0em 0.5em 0em;
        }
        .id_type > .lsc img{
            width:100%;
            height:100%;
        }
        #resident{
            flex: 0 1 100%;
        }
        #back {
            margin-top:0em;
            flex: 0 1 10em;
            background:transparent;
            border:2px solid black;
        }
        #continue_enable {
            margin-top:0em;
            flex: 0 1 20em;
            background:#F2BE5C;
            border: 2px solid #F2BE5C;
        }
        #continue_disable{
            margin-top:0em;
            flex: 0 1 20em;
            background:#EEF0F1;
            border: 2px solid #EEF0F1;
        }
        hr{
            width:5em;
        }
    }
    .formField{
        #section{
            justify-content:space-between;
            flex-wrap:wrap;
        }

    }
    .formField > .section > .input{
        display:flex;
        flex-direction:column;
        gap:0.5em;
        flex: 1 1 15em;

        label{
            font-size:0.8rem;
        }
        input{
            padding:1em;
            background:#EEF0F1;
            border:2px solid #EEF0F1;
            outline:none;
            border-radius:8px;
            padding-left:1em;
        }
        input:focus{
            outline:none;
        }
        .resident{
            width:100%;
        }
    }


`

// wallet code section

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
    color: #F2BE5C;
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

@media (max-width:650px){
position: absolute;
width:300px;
height:330px;
left:160px;
top:90px;


h4{
    font-style: normal;
    font-weight:500;
    font-size:14px;
    margin-top:30px;
    margin-left:23px;
}

h2{
    position:absolute;
    left:100px;
    top:0px;
    width: 141px;
    height: 29px;
    font-weight: 600;
    font-size:22px;
}

div{
    display:grid;
    margin-top:60px;
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
        margin-top:20px;
        height: 40px;
        background: #A6A6A6;
        border-radius: 4px;
    }

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


}

`

export const Rightwallet = styled.div`
position: absolute;
width: 500px;
height: 369px;
left: 824px;
top: 110px;
background: #FFFFFF;
border-radius: 8px;




`



export const Bottom = styled.div`

position: absolute;
width: 1045px;
height: 310px;
left: 277px;
top: 522px;
background: #FFFFFF;
border-radius:8px;

 table{
    border-collapse:collapse;
    width:100%;  
    overflow:hidden;
}

td{
    padding:12px 44px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    text-align:left;
}


table tr {
    border-bottom:1px solid #dddddd;
}

table th{
    padding:20px;
    padding-left:0px;
    // text-align:left;
}

table tr:nth-of-type(6 ) {
    border-bottom:none;

}
.red{
    color:red;
}

.green{
    color:green;
}


`