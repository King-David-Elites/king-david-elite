import styled from "styled-components";

export const Container = styled.div`
display:block;
box-sizing:border-box;

.logo-div{
    display:flex;
    padding:30px 40px;
    align-items:center;
    margin:0px 50px;
    color:#F2BE5C;

    p{
        padding-left:15px;
    }
}

h3{
    font-size:40px;
    width:fit-content;
    text-align:center;
    margin:20px auto;
}

.p{
    width:75%;
    margin:10px auto;
    font-size:20px;
    text-align:center;
    font-family: 'Poppins';
    
}

.message{
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    border-radius: 6px;
    color: white;
    padding: 10px;
    width: 50%;
}
.success{
    background: rgb(20, 255, 100);
}

.error{
    background: rgb(255, 20, 20);
}

.btn{
    margin:50px auto;
}

input{
    box-shadow:3px 4px 2px rgba(0,0,0,.1);
    display:block;
    border:none;
    text-align:center;
    width:50%;
    margin:20px auto;
    height:40px;
}

button{
    box-shadow:3px 4px 2px rgba(0,0,0,.1);
    display:block;
    border:none;
    text-align:center;
    width:50%;
    margin:20px auto;
    height:40px;
    color:white;
    background:#F2BE5C;
}

`