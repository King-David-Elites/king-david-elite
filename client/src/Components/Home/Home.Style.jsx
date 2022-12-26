import styled from 'styled-components'
import theme from '../../application/utils/Theme'

export const CategoriesContainer = styled.div`
overflow: hidden;
`
export const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    gap: 1em;
    width: 100%;
    overflow-x:auto;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        padding: 90px;
        ::-webkit-scrollbar{
            width:0;
        }
    }
   
`

export const Category = styled.div`
    background:  linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0, 0, 0, 0)), url(${(prop)=> prop?.bg});
    height: 300px;
    border-radius: 6px;
    flex: 1 0 70%;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    background-size: cover;
    

    &:hover{
        transform: scale(1.2);
    } 

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex: 1 0 20%;
        margin: auto;
    }

`




export const InformationContainer = styled.div`
    display: grid;
    padding: 94px;

    @media(max-width:850px){
        padding:20px;
    }
`

export const Information = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    justify-content: center; 
    gap: 50px;

    .image{
        position: relative;
    }

    .displace{
        position: absolute;
        width:50px;
        height: 110px;
        background-color: #F2BE5C;
        right:-25px;
        top:53px;
    }

    img{
        width:100%;
        height:230px;
        object-fit: cover;

    }

    .textContent{
        display: grid;
        align-items: center;
        justify-content: center;
        align-content: center;
        padding: 0 30px;
        gap: 10px;
        
    }

    @media(max-width:850px){
        display:block;
        grid-template-columns: none;

        .image{
            position: sticky;
        }
        
        .business{
            width:360px;
            top:-9rem;
            right:5rem;
            position: relative;
        }


        img{
            width:100%;
            height:210px;
            object-fit:contain;
        }

        .displace{
            display:none;
            position:sticky;
        }

        .textContent{
            padding:0;
            gap:0;
            margin:10px auto;
            text-align:center;

            h3{
                margin:20px auto;
                width:80%;
                font-size:17px;
                font-family: 'Poppins';
                font-weight:600;

            }

            .p{
                text-align: center;
                font-weight:400;
                font-size:13px;
            }
            .action{
                margin:30px auto;
                width:98px;
                height:34px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(90deg, #F2BE5C 23.7%, #000000 286.13%);
                border-radius: 4px;
                font-size:12px;
            }


 

        }


        

        .coffee{ 
            padding: 20px 0;
        }

        .img_coffee{
            width:100%;
            height:auto;
            object-fit:cover;
            padding: 10px;
        }

           .Elite{

                h4{
                    font-size:17px;
                    text-align: center;
                    margin:10px auto;
                }

                p{
                    font-weight:500;
                    font-size:12px;
                    text-align: center;
                    
                }
        

            }


        form{
            margin:50px auto;
            display: flex;
        }


        input{

            font-family: 'Poppins';
            font-size: 12px;
            padding:15px;
            background: rgba(166, 166, 166, 0.1);
            border-radius: 4px;
            border: none;
            width:60%;
            margin-left:10px;

        }

        .btn{
            margin-right:10px;
            text-align: center;
            padding:10px;
            font-family: 'Poppins';
            width:30%;
            font-weight: 400;
            font-size: 15px;
            color: #252625;
            background: linear-gradient(90deg, #F2BE5C 23.7%, #000000 286.13%);
            border-radius: 4px;
        }

        
    

    }

`

export const SubFooter = styled.div`
    background:linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0, 0, 0, 0)), url(${(prop)=> prop.bg});
    width:100%;
    height: 300px;
    background-position: center;
    margin: 50px 0;
    padding: 50px 650px 50px 50px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    background-size: cover;

    @media(max-width:850px){
        position:relative;
        /* background-size:; */
        background-repeat:no-repeat;
        background-position: center;
        background-size:cover;
        padding:0px;

       .sub-p1{
        font-family: 'Poppins';
        text-align: center;
        font-size:14px;
       }
       .sub-p2{
        font-size:12px;
        padding-top:10px;
        text-align: center;
        font-family: 'Poppins';

       }

    }

`

export const BorderText = styled.div`
    color: ${(prop)=> prop.color || "white"};
    font-size: ${(prop)=> prop.fontSize || "14px"};
    padding: 10px;
    border: 2px solid;
    display: inline-flex;
    width: fit-content;
    cursor: pointer;

    @media(max-width:850px){
        margin:20px auto;
    }
`
