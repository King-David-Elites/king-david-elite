import styled from "styled-components";

export const Container = styled.div`

margin:0;
padding:0;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(.jpg);
position: relative;
width:100%;
height:41.05rem;
@media(max-width:480px){

    height:auto;
    background:white;
    width:auto;
}

@media(max-width:800px){
    width:auto;
    height:auto;
    background:white;

}



`

export const Page = styled.div`
position:absolute;
margin:50px 450px;
width:30rem;
height:550px;
background: #FFFFFF;
border-radius: 6px;

h1{
padding-top:2.8rem;

font-style: normal;
font-weight:700;
font-size: 24px;
line-height:36px;
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
margin:30px auto;
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
align-items: center;
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

}


@media(max-width:800px){
margin:40px auto;
position:absolute;
width:100%;
left:0;
top:0;
background:white;
border-radius: 6px;


input{
    margin:30px auto;
    padding:15px 16px;
    gap:10px;
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