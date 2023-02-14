import styled from "styled-components";

export const Container = styled.div`
   background: #f0f2f5;
   min-height:100vh;

   .bg_contact{
       text-align: center;
       color:rgba(255, 255, 255, 0.7);

       h1{
          padding-top:6em ;
          font-size:2.5rem;
          font-weight: 600;
       }

       p{
         font-size: 1rem;
       }
   }


   .cont{
       display: flex;
       justify-content:space-evenly;

       .LCont{

          h1{
             margin:2em auto;
             margin-bottom:0;
             font-size:1.5rem;
             width:60%;
             font-weight: 600;
          }

          p{
            margin:0 auto;
            font-size:.8rem;
            width:60%;
          }
       }

       .RCont{
          width:40%;

          h1{
            margin-top:2em;
             margin-bottom:0;
             font-size:1.5rem;
             font-weight: 600;
          }

          .minCont{
            display:flex;
            margin-bottom:.5em;
            justify-content: space-between;

            p{
                font-size:.7rem;
                margin-top:1em;
            }
          }

          input{
             background-color:#ffffffbc;
             padding:.5em;
             border-radius: 4px;
             width:18vw;
          }
          
          .comment{
            p{
                font-size:.75rem;
            }

            input{
                width:100%;
                height:25vh;
            }
          }
       }

       button{
            background: linear-gradient(90deg, #F2BE5C 23.7%, #000000 286.13%);
            border-radius: 4px;
            padding:1em;
            margin-top:3em;
       }
   }

   @media(max-width:850px){


    .cont{
       display:grid;
       justify-content:space-evenly;

       .LCont{

          h1{
             margin:2em auto;
             margin-bottom:0;
             font-size:1.5rem;
             width:60%;
             font-weight: 600;
          }

          p{
            margin:0 auto;
            font-size:.8rem;
            width:60%;
          }
       }

       .RCont{
          width:40%;
          margin:.5em .5em;

          h1{
            margin:3em auto;
             margin-bottom:0;
             font-size:1rem;
             font-weight:600;
          }

          .minCont{
            display:block;
            margin-bottom:.5em;
            justify-content: space-between;

            p{
                font-size:.7rem;
                margin-top:1em;
            }
          }

          input{
             background-color:#ffffffbc;
             padding:.5em;
             border-radius: 4px;
             width:90vw;
          }
          
          .comment{
            p{
                font-size:.75rem;
            }

            input{
                width:90vw;
                height:25vh;
            }
          }
       }

       button{
            background: linear-gradient(90deg, #F2BE5C 23.7%, #000000 286.13%);
            border-radius: 4px;
            padding:1em;
            margin-top:3em;
       }
   }
          
   }
    
`