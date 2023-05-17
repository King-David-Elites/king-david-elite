import styled from "styled-components";

export const Background = styled.div`

.bg_help{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.7);
}

h1{
    font-style:SemiBold;
    font-size:60px;
    color:rgba(255, 255, 255, 0.7);
}

p{
    font-style:Regular;
    font-size: 20px;
    color:rgba(255, 255, 255, 0.7);
}

@media (max-width:850px){
    p{
        font-size:15px;
    }

    h1{
        font-size:40px;
    }
}

`
