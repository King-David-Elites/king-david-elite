import styled from "styled-components";

export const ListingHead = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    .heading{
        margin-top:6em;
        flex: 0 1 50em;
        font-family: 'Poppins';
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .head1{
            font-weight: 600;
            text-align:center;
        }
        .head2{            
            font-weight: 400;  
            text-align:center;       
        }
        select{
            width:70%;
            margin:1.5em 1em;
            padding:12px 16px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            border:2px solid black;
            border-radius:0.5em;
            cursor:pointer;
            font-weight:bolder;  
            font-size:1rem;                      
        }
    }
`
export const ListingForm = styled.div`      
    display:flex;
    justify-content:center;
    align-items:center;

    .form_Content{          
        width:85vw;        
        padding:0.5em;       
        margin-top:2em;
        
        .locate{
            font-family:Inter;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap:0.5em;
            margin-bottom:2em;
            font-weight:600
        }
        .section{
            font-family:Inter;
            display:flex:
            flex-direction:column;
            justify-content:center;
            align-items:center;
            gap:0.5em;                
            margin-bottom:2em;        
        }
        #section{
            font-family:Poppins;
        }
        .section p{
            font-weight:600;
        }
        .section > .base{
            font-size:0.8rem;
            color:gray;
        }
        .section input{
            width:100%;
            padding:1em;
            padding-left:1.5em;
            border-radius:0.5em;
            border:2px solid black;            
        }
        .section textarea{
            width:100%;
            padding:1em;
            padding-left:1.5em;
            border-radius:0.5em;
            border:2px solid black;  
            height:8em;          
        }
        .section select{
            width:80%;
            margin:1.5em 1em;
            padding:12px 16px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            border:2px solid black;
            border-radius:0.5em;
            cursor:pointer;
            font-weight:bolder;  
            font-size:1rem;                      
        }
        .section > .OutProp{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap:1em;
            flex-wrap:wrap;
        }
        .section > .OutProp > .props{
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:0.5em;
            padding:0.5em 1em;
            background:#DDDFE6;
        }
    }
`
