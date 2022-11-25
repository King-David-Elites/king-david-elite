import styled from "styled-components";

export const ListingHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .heading {
    margin-top: 6em;
    flex: 0 1 50em;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .head1 {
      font-weight: 600;
      text-align: center;
    }
    .head2 {
      font-weight: 400;
      text-align: center;
    }
    select {
      width: 70%;
      margin: 1.5em 1em;
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid black;
      border-radius: 0.5em;
      cursor: pointer;
      font-weight: bolder;
      font-size: 1rem;
    }
  }
`;
export const ListingForm = styled.div`      
    display:flex;
    justify-content:center;
    align-items:center;

    .form_Content{          
        width:85vw;        
        padding:0.5em;       
        margin-top:2em;
        
        p{
            font-weight:600;
            margin:0.5em 0em;
        }
        .numbw{
            width:100%;
            font-weight:600;
            color:red;
            font-size:0.8em;             
            margin:-1em 0em 2em 0em; 
        }
        .error{
            width:100%;
            font-weight:600;
            color:red;
            font-size:0.8em;            
            margin-bottom:3em;
        }
        .locate{
            font-family:Inter;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap:0.5em;
            margin-bottom:2em;
            font-weight:600;
            cursor:pointer;
        }
        .section{
            font-family:Inter;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:flex-start;
            gap:0.5em;                
            margin-bottom:2em;        
        }
        .section hr{
            width:100%;
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
        .section > .dashed{
            border:1px solid black;  
            border-style:dashed;    
            display:flex;
            justify-content:center;            
        }
        .section textarea{
            width:100%;
            padding:1em;
            padding-left:1.5em;
            border-radius:0.5em;
            border:2px solid black;  
            height:8em;          
            resize:none;
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
            gap:0.5em;
            cursor:pointer;
        }                
        .NumbB{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap: 4em;
            flex-wrap:wrap;
            margin-bottom: 2em;
            font-weight:600;
        }
        .NumbB > .sect{
            flex: 0 1 20em;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            gap:1em;            
        }
        .NumbB > .sec{
            flex: 0 1 35em;
        }
        .NumbB > .sec select{
            width:100%;
            padding:12px 16px;
            border:2px solid black;
            border-radius:0.5em;
            cursor:pointer;
            font-weight:600;  
            font-size:1rem;  
        }
        .NumbB > .sec input{
            width:100%;
            padding:1em;
            padding-left:1.5em;
            border:2px solid black;
            border-radius: 0.5em;
        }
        .NumbB > .sect input{
            width:4em;
            padding:1em;
            padding-left:1.5em;
            border: 2px solid black;
            border-radius: 0.5em;
        }
        .NumbB > .sect > .price{
            flex: 0 1 20em;
            display:flex;
            justify-content:center;
            align-items:center;
            border: 2px solid black;
            border-radius: 0.5em;
        }
        .NumbB > .sect > .price input{
            width:70%;
            padding:1em;
            padding-left:1.5em;
            border: 0px;
            outline:none;
            font-weight:600;
        }
        .NumbB > .sect > .price select{
            width:30%;
            border-left: 2px solid black;
            padding:1em 0em 1em 1em;
            outline:none;
            border-radius: 0em 0.5em 0.5em 0em;
            font-weight:600;
            cursor:pointer;
        }
        .NumbB > .disable{
            flex: 0 1 15em;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:0.5em 2em;
            border-radius:0.5em;            
            border:2px solid #A6A6A6;
            color: #A6A6A6;
        }
        .NumbB > .enable{
            flex: 0 1 15em;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:0.5em 2em;
            border-radius:0.5em;            
            border:2px solid #2301F3;
            background:#2301F3;
            color: white;
            cursor:pointer;
        }
    }
`;
