import styled from "styled-components";

export const Container = styled.div`

margin:0;
padding:0;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./images/.jpg);
position: relative;
width:auto;
height:657px;

@media(max-width:650px){
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(.jpg);
    position: relative;
    width:auto;
    height:657px
}



`

export const Page = styled.div`

position: absolute;
width:470px;
height:570px;
left:450px;
top:50px;
background: #FFFFFF;
border-radius: 6px;

h1{
padding-top:30px;
font-family: 'Poppins';
font-style: normal;
font-weight:700;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #000000;
}

.back{
font-family: 'Poppins';
font-style: normal;
font-weight:500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #000000;
}

.mail{
width: 43px;
height: 24px;
margin-top:30px;
padding-left:47px;
font-family: 'Poppins';
font-style: normal;
font-weight:500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #000000;
}

input{
margin-left:47px;
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

.password{
margin-left:45px;
margin-top:10px;
margin-left:px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
}


.forgot{
margin-top:8px;
height: 21px;
font-family: 'Poppins';
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
    margin-left:47px;
    margin-top:15px;
    background: linear-gradient(90deg, #FFDF00 23.7%, #000000 286.13%);
    border-radius: 4px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight:550;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000000;
    
}


.or{
height: 30px;
margin-top:10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #000000;
}


.google{
margin-top:10px;   
width:360px;
height:44px;
margin-left:47px;
background: #FFFFFF;
box-shadow:0px 2px 1px rgba(0,0,0,0.2);
border:none;
border-radius:6px;
}

.account{
    margin-top:20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    
    
}


@media screen and (max-width:480px){
    
position: absolute;
width:350px;
height:550px;
left:27px;
top:55px;
background: #FFFFFF;
border-radius: 6px;

input{
    margin-left:47px;
    padding: 15px 16px;
    gap: 10px;
    width:260px;
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