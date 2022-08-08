import styled from 'styled-components'

export const CategoriesContainer = styled.div`

`

export const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 94px;
    gap: 50px;
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
        width: 50px;
        height: 120px;
        background-color: #FFDF00;
        right: -25px;
        top:53px;
    }

    img{
        width: 100%;
        height: 230px;
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
`

export const SubFooter = styled.div`
    background:linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0, 0, 0, 0)), url(${(prop)=> prop.bg});
    width: 100%;
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

`

export const BorderText = styled.div`
    color: ${(prop)=> prop.color || "white"};
    font-size: ${(prop)=> prop.fontSize || "14px"};
    padding: 10px;
    border: 2px solid;
    display: inline-flex;
    width: fit-content;
    cursor: pointer;
`