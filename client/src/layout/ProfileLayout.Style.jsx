import styled from "styled-components"
import theme from "../application/utils/Theme";


export const ProfileWrapper = styled.div`

     height: 100vh;
    overflow-y: auto;

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .lower-div {
    height: 80%;

    @media (min-width: ${theme.breakPoint['tablet']}) {
      
    }  
}

.slack{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        width: 150px;
        height: 150px; 
    }  
}

.detail1 {
    display: flex;
    flex-direction: column;
    min-height: 30%;
    margin: 0.8em;
    gap: 0.3em;

}

.sub-detail1 {
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
}

.btn-wrapper{
    display: flex;
    gap: 1em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
       flex: 1;
    }  
}

.hide-btn{
    display: none;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: flex;
        color: white;
        border-radius: 4px;
        border: none;
        background: #252625;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        cursor: pointer;
    }  
}

.sub-detail2 {
    height: 100px;
    letter-spacing: 0.05em;
    font-weight: 500;
    line-height: 24px;
    margin-top: 1em;
    min-height: 15em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin-top: 2em;
        opacity: 95%;
        line-height: 25px;
        padding: 0em 8em;
    }  
}

.detail2 {
    min-height: 70%;
} 

.camera-div {
    width: 20px;
    height: 20px;
    background: rgba(242, 242, 242, 0.5);
    backdrop-filter: blur(20px);
    border-radius: 18px;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 60px;
    top: 51px;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        left: 120px;
        top: 110px;
    }  
}

.detail-text {
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    min-width: 40%;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    overflow-x: auto;
   
    @media (min-width: ${theme.breakPoint['tablet']}) {
       align-items: flex-start;
       flex: 2;
    }  
    
}

.badge-div {
    display: flex;
    gap: 0.1em;
}

.badge {
    color: ${theme.blueText};
    margin-left: 0.3em;
}

.badge-div{
    white-space: nowrap;
}

.detail-text > p{
    color: #A6A6A6;
}

.btn {
    background-color: #BABABB;
    border: none;
    color: white;
    padding: 8px 4px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 2px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-wrapper {
    white-space: nowrap;
}

.black-btn {
    background-color: #252625;
    width: 100%;
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 2px;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        display: none;
        margin-top: 0em;
    }  
}

.upgrade{
    color: #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.upgrade-icon{
    color: #FFDF00;
}

.btn >.icon {
    color: #737373;
    margin-right: 0.3em;
}

.border {
    background: #ECEDEE;
    width: 100%;
    height: 6px;
    margin-top: 3em;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        margin-top: 0.4em;
    }
}

.border2{
    background: #ECEDEE;
    width: 100%;
    height: 6px;
}


`

export const UpperDiv = styled.div`
    height: 20%;
    background:url(${props => props.imageUrl}); 
    background-color: #0D0D0D;
    background-size: cover;
    object-fit: cover;
    background-blend-mode: lighten;
    background-repeat: no-repeat;
`

export const Slack = styled.div`
    border: 2px solid #ECEDEE;
    border-radius: 1000px;
    width: 80px;
    height: 80px;
    background-image:url(${props => props.imageUrl});
    background-size: contain;
    object-fit: contain;
    position: relative;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        width: 150px;
        height: 150px;  
        margin-top: -6em;
        margin-left: 6em;
    }  
`
