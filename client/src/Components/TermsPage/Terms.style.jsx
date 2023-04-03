import styled from "styled-components";

export const Container = styled.div`

.nav{
    background-color: rgba(0,0,0,.8);
    padding:1em;
    box-shadow:2px 1px 2px rgba(0,0,0,.1);
    display: flex;

    .mini{
        padding-left:1em;
        display: flex;
        align-items:center;
        gap:.5em;
        color:#F2BE5C;
    }
}

.cont{
    margin:1em auto;

    h2{
        text-align: center;
        font-size:2rem;
    }

    p{
        font-size:.9rem;
        padding: .5em 4em;
    }

    b{
        display:block;
    }

    .inline{
        display:block;
    }


}

@media only screen and (max-width:800px){   

    .cont{
    
        h2{
            font-size:1.6rem;
        }

        p{
            font-size:1rem;
            padding: .5em 1em;
        }

    }


}

`