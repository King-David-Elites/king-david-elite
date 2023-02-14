import styled from "styled-components"

export const GenericContainer = styled.div`

position: absolute;
width: 1050px;
height:520px;
left:260px;
top:100px;
background: #FFFFFF;
border-radius: 6px;

h1{
    font-style: normal;
    font-weight: 600;
    font-size:24px;
    line-height: 36px;
    letter-spacing: 0.01em;
    color: #000000;    
    margin:30px 50px;
}

`

export const Post = styled.div`
   postion:absolute;
   width:330px;
   height:400px;
   border:1px solid gray;
   border-radius:5px;
   margin:20px 50px;

   .min-post{
    display:flex;
    margin:15px 10px;

    p{
        font-style: normal;
        font-weight:600;
        font-size: 16px;
        line-height:24px;
        color: #000000;
        padding:5px 10px;
      
        
    }

    .S2{
        width:35px;
        height:35px;
        border-radius:50%;
        object-fit:cover;
    }
   }


   .Bg{
        margin:0px 20px;
        background-position:center;
        background-size:cover;
        width:290px;
        height:160px;
        position:absolute;
        border-radius: 40px 0px;
        
        .love{
            position: absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            width:30px;
            height:30px;
            left: 23px;
            top: 18px;
            border-radius:50%;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(20px);
        }

        button{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 8px 16px;
            gap: 10px;
            position: absolute;
            width:110px;
            height:30px;
            left:180px;
            top:130px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 0px 0px 48px 0px;
            font-style: normal;
            font-weight: 500;
            font-size:14px;
            line-height: 24px;
            color: #FFFFFF;
        }
   }

   h4{
    font-style: normal;
    font-weight:600;
    font-size:15px;
    line-height: 30px;
    color: #000000;
    padding:162px 20px;
   }

   h5{
    font-style: normal;
    font-weight:600;
    font-size:13px;
    line-height: 27px;
    color: #000000;
    position:absolute;
    top:355px;
    left:70px;
   }

   .location{
    display:flex;
    position:absolute;
    top:390px;
    left:70px;

    p{
        position:absolute;
        top:-7px;
        left:25px;
        font-style: normal;
        font-weight: 300;
        font-size:11px;
        line-height: 18px;
        color: #000000;
        width:280px;
        height: 36px;
    }
   }

   button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    width: 100px;
    height:35px;
    border:none;
    background: linear-gradient(90deg, #FFDF00 23.7%, #000000 286.13%);
    border-radius: 4px;
    position:absolute;
    top:450px;
    left:70px;
    font-style: normal;
    font-weight:500;
    font-size:11px;
}





`

