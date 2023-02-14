import styled from "styled-components";
import bg from "../Home/images/c3.jpg"

export const Container = styled.div`

margin:0;
padding:0;
background:  linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;
width:auto;
height:100vh;

@media(max-width:650px){
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg});
    position: relative;
    width:auto;
    height:100vh;
}



`

export const Page = styled.div`
    display:flex;
    flex-direction:column;
position:absolute;
    top:0;
    left:0;
    right:0;
margin:50px auto;
width:30rem;
height:570px;
background: #FFFFFF;
border-radius: 6px;

h1{
padding-top:30px;

font-style: normal;
font-weight:700;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #000000;
}

.back{

font-style: normal;
font-weight:500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #000000;
}



input{
margin:10px auto;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 15px 16px;
gap: 10px;
width:360px;
height:45px;
background: #FFFFFF;
border: 1px solid #737373;
border-radius: 4px;
}


.forgot{
margin-top:8px;
height: 21px;

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-align: center;
color: #000000;
}

.red{
    color: #FA5936;
}

.login{
    display: flex;
    border:none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width:360px;
    height: 44px;
    margin:25px auto;
    background: linear-gradient(90deg, #FFDF00 23.7%, #000000 286.13%);
    border-radius: 4px;
    
    font-style: normal;
    font-weight:500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    
}


.or{
height: 30px;
margin-top:15px;

font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #000000;
}


.google{
display:flex;
margin:17px auto;
padding:.8rem;
justify-content:center;
text-align:center; 
width:360px;
height:44px;
background: #FFFFFF;
box-shadow:0px 2px 1px rgba(0,0,0,0.2);
border:none;
border-radius:6px;
}

.account{
    margin-top:20px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    
    
}

@media(max-width:830px){
    margin:0px auto;
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background:white;
    border-radius:0;
    
    
    input{
        margin:30px auto;
        padding:15px 16px;
        gap:10px;
        width:90%;
        height:45px;
        border-radius: 4px;
        }
    
    .google{
        width:260px;
        height:44px;
        }
    
    .login{
        width:260px;
    }
    
    }



`