import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'poppins';


    .cont{
        width:100%;
        min-height:100vh;
        
        h1{
            font-weight: 700;
            text-align: center;
            font-size:1.5rem;
            margin-top:1em;
        }

        .acct{
            margin-top:.5em;
            text-align: center;
            font-size:1rem;
        }
    }

    .seller{
        display: flex;
        width:60%;
        height:40vh;
        border-radius:4px;
        margin:2em auto;
        background-color:rgba(249,168,38,.9);
        color: white;

        h2{
            font-weight: 700;
        }



        p{
            font-size:1rem;
            padding-left:1em;
            margin-top:.7em;
        }


        img{
            width:60%;
            object-fit:cover;
        }


    }

    .buyer{
            width:60%;
            display: flex;
            justify-content: space-around ;
            background-color: #ebe5e5;
            height:40vh;
            border-radius:4px;
            margin:2em auto;

            h3{
                font-weight: 700;
                padding:1em;
            }

            p{
                font-size:1rem;
                padding-left:1.5em;
            }

            img{
                width:60%;
                object-fit:cover;
            
            }
    }

    button{
        display: grid;
        border: none;
        width:60%;
        background-color: #F9A826;
        border-radius: 3px;
        color: black;
        text-align: center;
        margin:1em auto;
        padding:.8em 0;

    }

    @media only screen and (max-width:850px){

            .seller{
                width:90%;
                height:30vh;

            h2{
                padding:.5em .8em;
                font-weight: 700;
            }

            p{
                font-size:.7rem;
                padding-left:1.5em;
                margin-top:.7em;
            }


            img{
                width:40%;
                object-fit:cover;
            }


        }

        .buyer{
                width:90%;
                height:30vh;

                h3{
                    font-weight: 700;
                    padding:1em;
                }

                p{
                    font-size:.8rem;
                    padding-left:1.5em;
                }

                img{
                    width:43%;
                    object-fit:cover;
                
                }
        }

            button{
            width:90%;
        }

                
    }

  
`