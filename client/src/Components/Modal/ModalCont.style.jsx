import styled from "styled-components";

export const Container = styled.div`
    margin:0;
    padding:0;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    width: 100%;


    div{
        display:grid;
        justify-content: center;
        align-items:flex-start;
        width:20%;
        height:25vh;
        border-radius:3px;
        background-color: #dde1e7;
        box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 184, 121,.288);
    }

    div:hover{
        border-radius:3px;
        background-color: #dde1e7;
        box-shadow:inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 184, 121,.288);
    }

    p{
        text-align: center;
        color: red;
    }

    h1{
        text-align: center;
        font-size:5rem;
        color: red;
    }



`