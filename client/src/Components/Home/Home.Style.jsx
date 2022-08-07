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

    img{
        width: 100%;
        height: 230px;
        object-fit: cover;

    }

    .textContent{
        display: grid;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        gap: 12px;
    }
`