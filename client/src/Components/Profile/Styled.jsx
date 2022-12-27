import styled from "styled-components"

export  const Header = styled.div`
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;

        @media (max-width:600px) {
            height:120px ;
        }
    }
`

export const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    justify-items: center;
    
    @media (max-width:600px) {
        grid-template-columns : 2fr 1fr ;
    }

    .profile{
        display: flex;
        gap: 20px;
        align-items: center;

        @media (max-width:600px) {
            gap :5px ;
        }
    }

    .title{
        display: flex;
        flex-direction: column;

        h3{
            text-transform: capitalize;
        }

        @media (max-width:600px) {
            h3{
                font-size: 14px;
            }   

            p{
                font-size: 10px;
            }
        }
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid white;

        @media (max-width:600px) {
            width: 80px;
            height: 80px;
        }
    }

    .btns{
        display: flex;
        align-items: center;
        gap: 20px;

        .edit{
            display: flex;
            padding: 10px;
            background: #e1dfdf;
            border: 1px solid #e2e2e2;
            font-size: 14px;
            gap: 5px;
            cursor: pointer;

            @media (max-width:600px) {
                font-size: 12px;
                padding: 7px;
            }
        }

        .upgrade{
            background: #252625;
            color: white;
            padding: 10px;
            font-size: 14px;
            cursor: pointer;

            @media (max-width:600px) {
                display: none;
            }
        }
    }

`

export const Bio = styled.p`
    width: 80%;
    margin: 20px auto;

    @media (max-width:600px) {
        font-size: 14px;
    }
`

export const Update = styled.div`
    display: none;

    @media (max-width:600px) {
        display: block ;
        width: 80%;
        text-align: center;
        margin: 0 auto;
        padding: 7px;
        background-color: #252625;
        color: white;
        border-radius: 6px;
    }
`

export const Switch = styled.div`
    margin: 50px 0;
    .line{
        width: 100%;
        height: 5px;
        background-color: #e2e2e2;
    }

    .options{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 80%;
        margin: 10px auto;
        font-size: 14px;

        .option{
            background:#e2e2e2;
            color: black;
            width: fit-content;
            padding: 7px 30px;
            border-radius: 6px;
            cursor: pointer;
        }

        .option:hover{
            background-color: #252625;
            color: white;
            transition: all .3s;
        }

        @media (max-width:600px) {
            width:100% ;
            padding: 0 10px;
            display: flex;
            justify-content: space-between;

            .option{
                padding: 5px 20px;
                font-size: 12px;
                border-radius: 3px;
                /* width: 20%; */
            }
        }
    }
`

export const Preview = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
    align-items: center;
    justify-content: center;
    justify-content: center;
    align-content: center;
    align-self: center;
    justify-items: center;

    img{
        margin: auto 0;
    }

    .icon{
        position: absolute;
        right: 20px;
        top: 20px;
        background-color: rgba(150,150,150);
        clip-path: circle();
        padding: 10px;
    }
`