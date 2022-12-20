import { LocationMarker, BadgeCheck } from 'heroicons-react';
import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { EachBuildingContainer } from './RealEstate.Style';
import realEstatePics from './Image/real-estate-pics.jpg';
import Banner from "../Banner/Banner";
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { MOCK_DATA } from './MOCK_DATA';
import { useNavigate } from 'react-router-dom';
import theme from '../../application/utils/Theme';
import { MorePic, Text, MoreBg } from '../Cars/Cars.Style';
import { useCallback, useState } from 'react';
import axios from 'axios';
import TimeAgo from "timeago-react";

const EachBuilding = ({ active }) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [property, setProperty] = useState({})
    // const selectedBuilding = MOCK_DATA.find((items) => items.propertyName === title);
    const MediaType = [
        {
            link: `/real-estate/${property.title}`,
            media: "Photos"
        },
        {
            link: `/real-estate/${property.title}/videos`,
            media: "Videos"
        }
    ]

    const getAList = useCallback(()=>{
        axios.get(`https://kde.cyclic.app/listings/each/${id}`)
        .then(resp => setProperty(resp.data))
        .catch(err => console.error(err));
    }, [id])

    useEffect(() => {
        getAList();
    }, [getAList])

    return (
        <>
            <Navbar bg="black" sticky="sticky" />

            <EachBuildingContainer>
                <div className="upper">
                    <p>King David Elites | Luxury Real Estates</p>
                </div>

                <div className="banner">
                    <h3>{property.title}</h3>
                    <h5>US {property.price}</h5>
                    <div className='locationIcon'>
                        <p className='icon'><LocationMarker size={15} /></p>
                        <p>{property.location}</p>
                    </div>
                </div>

                <div className="mediaType">
                    {
                        MediaType.map((mediatype, i) => {
                            return (
                                <Text
                                    style={{ cursor: "pointer" }}
                                    key={i}
                                    color={active === i ? theme.color : "black"}
                                    onClick={() => navigate(mediatype.link)}
                                >
                                    {mediatype.media}
                                </Text>
                            )
                        })
                    }
                </div>

                <div className="imageGallery">
                    {
                        property.images?.map((image, i) => {
                            console.log(image)
                            return (
                                <>
                                    <div className='imageFlex' id={i} {...image} selectedBuilding={property}>
                                        {
                                
                                                    <div className="image">
                                                        <img
                                                            src={image}
                                                            alt="realestate"
                                                        />
                                                    </div>
                                              
                                        }
                                       
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className="details">
                    <div className="listDetails">
                    <p>Listed on <TimeAgo datetime={property.createdAt}/></p>
                        <h4>Amenities</h4>
                        {
                            property.features?.map((feature, i)=>{
                                return(
                                    <p key={i}>{feature}</p>
                                )
                            })
                        }
                        <p className="yearDetail">Year: {property.year}</p>
                    </div>
                    <div className="posterDetails">
                        <div className="container">
                            <h4>{property.postedBy?.firstName + " " + property.postedBy?.lastName} <BadgeCheck color="blue" width="30px" /></h4>
                            <p>Shaner estate, {property.location}.</p>
                            <p>Joined: <TimeAgo datetime={property.postedBy?.createdAt}/> </p>

                            <div className="options">
                                <div className="option solid">
                                    Send Message
                                </div>

                                <div className="option">
                                    View Profile
                                </div>
                            </div>
                        </div>

                        {/* {property?.images[0] && <img className='buildingImage' src={property?.images[0]} alt="" />} */}
                    </div>
                </div>
            </EachBuildingContainer>
            <Banner category="Real Estate" />
            <Footer />
        </>
    )
}

export default EachBuilding