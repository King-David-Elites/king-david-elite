import styled from "styled-components";

export const Cont = styled.div`
background: #D5DBE3;
    
`

export const LeftContainer = styled.div`
    font-size:.8rem;
    background-color:white;
    /* width:15%; */
    min-height:100vh;
    border:1px solid white;


    div{
        padding:5px 0;
        margin:.9em;
        width:auto;
        height:30px;
        text-align: center;
        align-items: center;
        color: #8A92A6;
    }

    .list{
        color:black;
        border-radius: 4px;
        background: #F2BE5C;
        box-shadow: 0px 2px 4px rgba(138, 146, 166, 0.3);
    }

`

export const TopContainer = styled.div`
    padding:.5em;
    background-color: white;
    box-sizing: border-box;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border-bottom:1px solid  #E9ECEF;;

    div{
        display:flex;
    }

    .kde{
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        width:15%;
        font-size:.4rem;
        text-align: center;
        color: #252625;
    }

    .kd{
        width:30px;
    }

    .search{
        width:65%;
        align-items:center;
        border:1px solid #E9ECEF;
        color:#E9ECEF;
        padding: 4px 16px;
        gap:5px;
        border-radius:4px;
    }

    .pCont{
        width:15%;
        align-items: center;
        .profile{
            width:40px;
            border-radius:50%;
            object-fit:cover;
        }

        .pBlock{
            display: block;


        }

        p{
            font-size:.6rem;
        }

    }
`

export const RightContainer = styled.div`
    margin-top: 20px;
    border:1px solid yellow;
    /* display: grid; */
    justify-content: center;
    width:auto;
    
`
export const PendingList = styled.div`
     background-color:white;
     border-radius:4px;
     width:60%;
     padding: 20px;


     .posts{
        display:flex;
        justify-content: space-around;
     }

     .post{
        margin:0.5rem ;

     }
     
     h1{
        font-family: 'poppins';
        margin:1em;
        font-size:1.6rem;
     }

     img{
        width:30px;
        height:30px;
        border-radius:50%;
     }

     .min_post{
        display: flex;
        margin:.5em;
        align-items: center;

        h5{
            margin-left:.4em;
        }
     }

     .Bg{
        position: relative;
        /* background-size:contain; */
        width:100%;
        object-fit: cover;
        height:160px;
        border-radius: 40px 0px;
        background-position:center;
        background-repeat: no-repeat;
        background-size:cover;
     

     .love{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left:25px ;
        top:15px;
        width:30px;
        height:30px;
        border-radius:50%;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
     }

     button{
            position: absolute;
            top:130px;
            left:137px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            gap:10px;
            width:100px;
            height:30px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 0px 0px 48px 0px;
            font-family: 'Poppins';
            font-size:12px;
            color: #FFFFFF;
            border:none;
            cursor: pointer;
     }


    }

    h2{
        margin:.2em auto;
        font-size:1.05rem;
        font-family:'poppins';
    }
    h4{
        margin:.1em auto;
        font-size:.8rem;
        font-family: 'poppins';
    }

    p{
        margin:.3em auto;
        font-size:.8rem;
    }

    .btn{
        margin-top:1em;
        margin-left:-1em;
        display: flex;
    }

    button{
        margin-top:0px;
        margin-left:15px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 10px;
        width:120px;
        height:40px;
        background: #F2F2F2;
        border-radius: 4px;
        font-family: 'Poppins';
        font-size:14px;
        text-align: center;
        background: linear-gradient(90deg, #F2BE5C 23.7%, #000000 286.13%);
        border-radius: 4px;
        border:none;
    
    }


    
    
`
export const ReportedAcct = styled.div`
      border:1px solid red;
      background-color:white;
      width:40%;


      h1{
        color: #FA5936;
        font-family: 'poppins';
        margin:1.8em;
        font-size:1.6rem;
      }

      img{
        width:30px;
        height:30px;
        border-radius:50%;
      }

      div{
        margin:1.5em auto;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
      }

      li{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      h5{
        font-size:.8rem;
        font-family:'poppins';
        margin-left:.2em;
      }

      p{
        font-size:.8rem;
        font-family: 'poppins';
        color: blue;
      }

      span{
        color: red;
      }

    
`
export const TopRightCont = styled.div`
   display:flex;
   gap:10px;

    
`

export const Grid = styled.div`
   display:grid;
   grid-template-columns:1.5fr 8fr;
   gap: 30px;
    
`

export const ButtomRight = styled.div`
    margin-top:1em;
    min-height: 100vh;
    display:grid;
    grid-template-columns:5.5fr 8fr;
    gap:.7em;

    .buttom_right{
        border:1px solid green;
        background-color:white;


        .min_head{
            padding:.8em 0;
            display: flex;
            justify-content: space-around;
            font-size:.8rem;
            font-family:'poppins';
            background-color:#F5F6FA;
            color:#8A92A6;
        }

        .cont{
            font-size:.8rem;
            font-family:'poppins';
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top:.8em;
        }

        .transfer{
            display: flex;
            align-items: center;


            p{
            display: grid;
            margin-left:.6em;
        }
        }
        


        .name{
            margin-right:5em;
        }

        h3{
            color: red;
            font-weight:100;
        }


        img{
            width:30px;
            height:30px;
            border-radius:50%;
        }

        .header{
            display: flex;
            justify-content:space-between;
            align-items: center;
            font-size:.8rem;
            padding:3em;

            p{
                color:#737373;
                display: flex;
                align-items: center;
            }
        }
    }

    .buttom_left{
        background-color: white;
        border: 1px solid purple;

        .account{
            h1{
                font-size:1.6rem;
                font-family:'poppins';
                margin:1.4em;
            }

            .min_acct{

                h3{
                    padding-top:2em ;
                    padding-bottom:1em ;
                    color: #F2BE5C;
                }

                width:80%;
                min-height:30vh;
                padding-left:2.3em;
                margin-left:2.7em;
                color: white;
                background: #252625;
                border-radius: 6px;
                font-family:'poppins';
                font-size:.8rem;

            }

            p{
                font-size:1.3rem;
                margin-top:2em;
                color: rgba(255, 255, 255, 0.2);
                font-family: 'poppins';
            }

        }

        
            .footer{

                margin: 15em 2em;

                .list{
                    width:40%;
                    background-color:#2301F3;
                    color: white;
                }
            }

        
    }
`