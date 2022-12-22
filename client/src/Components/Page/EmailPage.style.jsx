import styled from "styled-components";

export const Container = styled.div`

div{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0;
}

p{
    padding:20px;
    color:#F2BE5C;
}

 table{
    box-sizing: border-box;
    border-collapse:collapse;
    width:100vw;  
    overflow:hidden;
}

td{
    padding:7px 4px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 12px;
    line-height: 22px;
    text-align:center;
}


table tr {
    border-bottom:1px solid #dddddd;
}

table th{
    padding:20px 0;
    padding-left:40px;
    text-align:center;
}

table tr:nth-of-type(even) {
    background-color:#eee;

}


`