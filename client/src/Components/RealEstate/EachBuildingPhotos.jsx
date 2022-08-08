import React, { Fragment } from 'react'
import {ArrowLeft} from 'heroicons-react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { EachBuildingContainer } from '../RealEstate/RealEstate.Style'
import { MOCK_DATA } from './MOCK_DATA';
import Banner from "../Banner/Banner";
import {useNavigate} from 'react-router-dom';
import MainButton from '../buttons/MainButton'

const EachBuildingPhotos = ({active}) => {
    const {Id} = useParams()    
    const selectedBuilding = MOCK_DATA.find((items)=> items.id === parseInt(Id));    
    const navigate = useNavigate()
    const MediaType = [
        {
            link:`/real-estate/${selectedBuilding.title}/${Id}`,
            media:"Photos"
        },
        {
            link:`/real-estate/${selectedBuilding.title}/${Id}videos`,
            media:"Videos"
        }
    ]
  return (
    <Fragment>
        <Navbar bg="black" sticky="sticky"/>

        <EachBuildingContainer>
            <div className="upper">
                <div 
                    className="upperContent"
                    style={{cursor:"pointer"}}
                    onClick={()=>navigate(`/real-estate/${selectedBuilding.propertyName}`)}
                >
                    <ArrowLeft width="20px"/>
                    <p>Back</p>
                </div>   
                <div className="medias">
                    {
                        MediaType.map((mediatype,i)=>{
                            return(
                                <MainButton
                                    key={i}
                                    background = {active===i ? "black": "white"}
                                    color = {active===i ? "white": "black"}
                                    border = "black"
                                    onClick={()=>navigate(`${mediatype.link}`)}
                                >
                                    {mediatype.media}
                                </MainButton>
                            )
                        })
                    }                
                </div>                             
            </div>                        

            <div className="imageGallery">
                {
                    selectedBuilding.images.map((image)=>{
                        return(             
                            <>
                               <div id={image.id} {...image}>                                                                                                                
                                    <div className="image">                          
                                        <img 
                                            src={image.estateListed} 
                                            alt="realestate"
                                        />
                                    </div>                                                                      
                               </div> 
                            </>                                               
                        )                        
                    })
                }                                
            </div>                      
        </EachBuildingContainer>
        <Banner category="Real Estate" />                                         
        <Footer />        
    </Fragment>
  )
}

export default EachBuildingPhotos;