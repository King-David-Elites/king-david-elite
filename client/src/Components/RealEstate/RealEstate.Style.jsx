import styled from "styled-components"
import theme from "../../application/utils/Theme";

export const EstateProperties = styled.div`
    display:flex;
    justify-content:space-between;  
    align-items:center;  
    gap:1em;
    padding:0em;    
    flex-wrap:wrap;
    width:100%;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        padding:2em;
    }`

export const PropertyType = styled.div`
    flex: 1 1 25em;    
    display:flex;
    flex-direction:column;    
    justify-content:center;    
    align-items:flex-start;
    gap:0.2em;    
    margin:1em 0em;
`

export const SearchSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1em;
    padding-top: 2em;  
    width:100%;        
`

export const SearchC = styled(SearchSection)`    
    flex: 0 1 20em;
    padding:0.5em 1em;
    background:rgb(255,255,255,0.7);
    border-radius: 0.5em;
    justify-content: space-between;

    @media (min-width: ${theme.breakPoint['tablet']}) {
        flex: 0 1 25em;
        padding:0.5em 1em;
        }
`

export const EachBuildingContainer = styled.div`    
    .upper{
        display:flex;
        align-items:center;
        background: rgba(20, 18, 0, 0.05);
        backdrop-filter: blur(20px);
        padding: 16px 64px;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;     
        gap:30vw;   
    }

    .upperContent{
        display:flex;
        align-items:center;                        
        gap:0.5em;
    }

    .medias{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:2em;
    }

    .banner{
        padding: 30px;
        display: grid;
        text-align: center;
        line-height: 2;

        p{
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
        }
    }

    .mediaType{
        display:flex;
        justify-content:flex-end;
        align-items:center;
        gap:1.5em;
        padding: 0px 6em;
    }

    .imageGallery{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;                
        // display: grid;
        // grid-template-columns: 1fr 1fr;        
        gap: 5px;
        padding: 16px 30px;
    }

    .image{        
        width:18em;
        height: 250px;            
    }        

    .image > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .details{
        display: flex;
        margin: 50px 72px;
        align-items: center;
        justify-content: space-between;

        .listDetails{
            display: grid;
            gap: 20px;
        }

        .yearDetail{
            margin-top: 50px;
        }

        .posterDetails > img{
            width: 200px;
            height: 200px;
            border-radius: 48px 0 48px 0;
        }
    }

    .posterDetails{
        display: flex;
        padding: 30px 50px;
        gap: 20px;
        align-items: center;
        background: rgba(255, 223, 0, 0.1);
        backdrop-filter: blur(40px);

        .container{
            display: grid;
            gap: 10px;

            .options{
                display: flex;
                gap: 20px;
                /* padding: 0px 20; */

                .option{
                    background-color: transparent;
                    border:2px solid #FFDF00;
                    border-radius: 8px;
                    color: #FFDF00;
                    font-size: 12px;
                    padding: 5px 10px;
                    
                }

                .solid{
                    background-color: #FFDF00;
                    color: white;
                }

            }
        }

    }
`

export const BottomBanner = styled.div`
    background: linear-gradient(90.1deg, #000000 0.09%, rgba(0, 0, 0, 0) 96.23%), url(${(prop)=> prop.url});
    width: 100%;
    height: 241px;
    margin: 50px 0;
    /* background-position: calc(300px); */
    color: white;
    padding: 72px;
    display: grid;
    /* gap: 20px; */
`