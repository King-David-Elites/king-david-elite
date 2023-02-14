import styled from "styled-components";

export const Container = styled.div`
color:white;
display:block;
box-sizing:border-box;
min-height:100vh ;

.logo-div{
    display:flex;
    padding:30px 0px;
    align-self: center;
    justify-content: center;
    align-items:center;
    margin:0px auto;
    color:#F2BE5C;

    p{
        padding-left:30px;
        font-weight: 600;
    }
}

h3{
    font-size:40px;
    width:fit-content;
    text-align:center;
    margin:20px auto;
}

h4{
    color:#F2BE5C;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    width:50%;
    text-align:center;
    margin:20px auto 2px;
}

span{
    padding-left:20px;
    padding-right:20px;
}

.p{
    width:75%;
    margin:10px auto;
    font-size:20px;
    text-align:center;
    
}

.j{
    width:63%;
    margin:10px auto;
    font-size:20px;
    text-align:center;
    color:white;

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
    background: rgb(20, 205, 100);
}

.error{
    background: rgb(255, 20, 20);
}

.btn{
    margin:50px auto;
}

input{
    box-shadow:0px 4px 20px rgba(100,100,100,.2);
    display:block;
    border:none;
    border-radius: 6px;
    text-align:center;
    width:30%;
    padding: 10px 12px;
    margin:20px auto;
    color: black;
    // height:40px;
color: black;
}

button{
    box-shadow:0px 4px 20px rgba(0,0,0,.1);
    display:block;
    border:none;
    text-align:center;
    width:30%;
    margin:20px auto;
    height:40px;
    color:white;
    background:#F2BE5C;
    cursor: pointer;
    border-radius: 6px;
}

@media only screen and (max-width: 500px){
    h3{
        font-size: 20px;
    }

    h4{
        font-size:13px;
        width: 90%;
        margin: 0 auto;
        margin-top:15px;
    }

    .p{
        font-size: 14px;
        width: 90%;
        margin-top:15px;
    }

    .j{
        margin-top:15px;
        font-size:14px;
    }

    .message, input, button{
        width: 75%;
        font-size: 14px;
    }

    span{
        padding-left:10px;
        padding-right:10px;
    }
}

`
