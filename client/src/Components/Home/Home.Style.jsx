import styled from 'styled-components'

export const CategoriesContainer = styled.div`

`




export const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 94px;
    gap: 50px;

    @media(max-width:650px){
        margin-left:-70px;
        overflow-x:scroll;
        ::-webkit-scrollbar{
            width:0;
        }
    }

    

   
`

export const Category = styled.div`
    background:  linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0, 0, 0, 0)), url(${(prop)=> prop?.bg});
    width: 100%;
    height: 300px;
    border-radius: 6px;
    padding: 30px;
    display: flex;
    align-items: end;
    cursor: pointer;
    transition: .3s;
    background-size: cover;

    &:hover{
        transform: scale(1.2);
    }

    @media(max-width:650px){
        width:50%;
        height:200px;
                
    }

  
`



export const InformationContainer = styled.div`
    display: grid;
    padding: 94px;
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
        background-color: #FFDF00;
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

    @media(max-width:650px){
        margin-top:-50px;

        .image{
            top:-100px;
            left:-65px;
            position: relative;
        }


        img{
            width:120%;
            height:210px;
            object-fit:contain;
        }

        .displace{
            width:30px;
            height:55px;
            left:150px;
            top:85px;
        }

        .textContent{
            // display: grid;
            align-items: center;
            justify-content: center;
            align-content: center;
            padding: 0 30px;
            gap: 10px;
            width:100px;

            h3{
                width:200px;
                position:relative;
                left:50px;
                top:-100px;
                font-size:14px;
            }

            .p{
                position:relative;
                text-align:left;
                left:50px;
                top:-105px;
                font-size:13px;
            }
            .action{
                position:relative;
                top:-115px;
                font-size:12px;
                left:50px;
            }





            h4{
                margin-top:80px;
                position:relative;
                top:-160px;
                left:-30px;
                font-size:14px;
                width:170px;
            }

            p{
                position:relative;
                font-size:12px;
                top:-160px;
                left:-30px;
            }
        
        }

        .coffee{ 
            position: relative;
            margin-top:-28px;
            
        }

        .img_coffee{
            margin-left:65px;
            width:150%;
            height:115px;
            object-fit:contain;
        }

        input{
            position:relative;
            top:-155px;
            left:-30px;
        }

        .btn{
            position:relative;
            top:-150px;
            left:-30px;
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

    @media(max-width:650px){
        position:relative;
        top:-100px;
        /* background-size:; */
        background-repeat:no-repeat;
        padding:0px;

       .sub-p1{
        position:absolute;
        top:50px;
        left:20px;
        font-size:18px;
       }
       .sub-p2{
        position:absolute;
        top:120px;
        left:20px;
        font-size:15px;
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

    @media(max-width:650px){
        position:absolute;
        top:200px;
        left:20px;        
    }
`
