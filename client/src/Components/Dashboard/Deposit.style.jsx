import styled from "styled-components";


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
        color:white;
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

    .deposit{
        color:black;
        background: #FFDF00;
    }
}

p{
    width: 175px;
    height: 19px;
    font-style: normal;
    font-weight: 400px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    margin-top:12px;
    margin-left:33px;
}

img{
    position:absolute;
    top:30px;
    left:350px;
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


div{
    position:absolute;
    top:40px;
    display:flex;

    .paystack{
        margin-left:30px;
        font-style: normal;
        font-size:20px;
        color:black;       
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        gap: 10px;
        border:none;
        width:220px;
        height: 54px; 
        background: #FFFFFF;
        border-radius: 0px 4px 4px 0px;
    }

    .flutterwave{
        font-style: normal;       
        color:white;
        border:none;
        font-size:20px;
        justify-content: center;
        align-items: center;
        padding: 12px 16px;
        gap: 10px;
        width:220px;
        height: 54px;
        background: rgba(115, 115, 115, 0.5);
        border-radius: 4px 0px 0px 4px;
    }
}



input{

display: flex;
flex-direction: row;
align-items: center;
padding: 16px 24px;
gap: 16px;
width: 450px;
margin-left:25px;
height: 70px;
border:none;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

input::placeholder{
    text-align:right;
    font-size:20px;
}





h6{
width: 128px;
margin-left:25px;
margin-bottom:10px;
height: 19px;
margin-top:120px;
font-style:normal;
font-weight:500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #000000;

}

.continue{
font-size:16px;
color:black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 40px;
gap: 10px;
position: absolute;
width: 450px;
height: 62px;
left:26px;
top: 265px;
border:none;
background: #FFDF00;
box-shadow: 0px 16px 40px rgba(255, 223, 0, 0.2);
border-radius: 4px;



}


`
