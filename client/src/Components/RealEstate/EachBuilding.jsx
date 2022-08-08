import { LocationMarker, BadgeCheck } from 'heroicons-react';
import React from 'react';
import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import { EachBuildingContainer } from './RealEstate.Style';
import realEstatePics from './Image/real-estate-pics.jpg';
import Banner from "../Banner/Banner";
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { MOCK_DATA } from './MOCK_DATA';
import {useNavigate} from 'react-router-dom';
import theme from '../../application/utils/Theme';
import { MorePic, Text, MoreBg } from '../Cars/Cars.Style';

const EachBuilding = ({active}) => {
    const navigate = useNavigate()
    const {title} = useParams()
    const selectedBuilding = MOCK_DATA.find((items)=> items.propertyName === title);
    const MediaType = [
        {
            link:`/real-estate/${selectedBuilding.propertyName}`,
            media:"Photos"
        },
        {
            link:`/real-estate/${selectedBuilding.propertyName}/videos`,
            media:"Videos"
        }
    ]
  return (
    <Fragment>
        <Navbar bg="black" sticky="sticky"/>

        <EachBuildingContainer>
            <div className="upper">
                <p>King David Elites | Luxury Real Estates</p>
            </div>
            
            <div className="banner">
                <h3>{selectedBuilding.title}</h3>
                    <h5>US {selectedBuilding.price}</h5>
                    <p><LocationMarker width={15}/> {selectedBuilding.location}.</p>
            </div>

            <div className="mediaType"> 
                {
                    MediaType.map((mediatype, i)=>{   
                        return(
                        <Text
                            style={{cursor:"pointer"}}
                            key={i}
                            color = {active===i ? theme.color : "black"}
                            onClick={()=>navigate(mediatype.link)}
                        >
                            {mediatype.media}
                        </Text>
                        )                                             
                    })
                }                                               
            </div>

            <div className="imageGallery">
                {
                    selectedBuilding.images.map((image)=>{
                        return(             
                            <>
                            <div id={image.id} {...image} selectedBuilding={selectedBuilding}>
                                {
                                    image.id===1 ?
                                    <div 
                                        style={{
                                            width:"50em",
                                            height:"400px"
                                        }} 
                                    >                                    
                                        <img 
                                            src={image.estateListed} 
                                            alt="car" 
                                            width="100%"                                       
                                            height="100%"
                                        />              
                                    </div>                      
                                    :        
                                    (
                                        image.id<=3 &&
                                        <div className="image">                          
                                            <img 
                                                src={image.estateListed} 
                                                alt="car"
                                            />
                                        </div>  
                                    )                                                                                                                                                                                     
                                }
                                {
                                (
                                    image.id===4 &&
                                    <MorePic imageUrl={image.estateListed}>
                                        <MoreBg
                                            onClick={()=>navigate(`${selectedBuilding.id}`)}
                                        >
                                            <Text>+16</Text>
                                        </MoreBg>
                                    </MorePic>                                    
                                )
                                }
                            </div>
                            </>                                               
                        )                        
                    })
                }                
                <p>Listed on {selectedBuilding.dateListed}</p>
            </div>

            <div className="details">
                <div className="listDetails">
                    <h4>Car Details and Specs</h4>
                    <p>Year: {selectedBuilding.BuildingDetails['Year']}</p>
                    <p>Address: {selectedBuilding.BuildingDetails['Address']}</p>
                    <p>Condition: {selectedBuilding.BuildingDetails['Condition']}</p>
                    <p>Brand Name: {selectedBuilding.DealerName}</p>
                    <p>Car Model: {selectedBuilding.BuildingDetails['CarModel']}</p>
                    <p>Engine: {selectedBuilding.BuildingDetails['Engine']}</p>
                    <p>Colour: {selectedBuilding.BuildingDetails['Colour']}</p>
                </div>
                <div className="posterDetails">
                    <div className="container">
                        <h4>{selectedBuilding.DealerName} <BadgeCheck color="blue" width="30px" /></h4>
                        <p>Shaner estate, {selectedBuilding.location}.</p>
                        <p>Joined: {selectedBuilding.dateJoined}</p>

                        <div className="options">
                            <div className="option solid">
                                Send Message
                            </div>

                            <div className="option">
                                View Profile
                            </div>
                        </div>
                    </div>

                    <img src={realEstatePics} alt="" />
                </div>
            </div>                                                                        
        </EachBuildingContainer>
        <Banner category="Real Estate"/>
        <Footer />
    </Fragment>
  )
}

export default EachBuilding