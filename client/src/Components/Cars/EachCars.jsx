import { LocationMarker, BadgeCheck } from 'heroicons-react'
import React, { Fragment,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { EachBuildingContainer } from '../RealEstate/RealEstate.Style'
import { CarAPI } from './DemoAPI/api'
import Banner from "../Banner/Banner";
import { useNavigate } from 'react-router-dom';
import { MorePic, Text, MoreBg } from './Cars.Style'
import theme from '../../application/utils/Theme';
import { useRef } from 'react'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const EachCars = ({ active }) => {
    const navigate = useNavigate()
    const { title } = useParams()
    const selectedCar = CarAPI.find((items) => items.title === title);
    const MediaType = [
        {
            link: `/cars/${selectedCar.title}`,
            media: "Photos"
        },
        {
            link: `/cars/${selectedCar.title}/videos`,
            media: "Videos"
        }
    ]
    const top = useRef(null)

    useEffect(()=>{
        scrollToRef(top)
    },[])
    return (
        <Fragment>
            <Navbar bg="black" sticky="sticky" />

            <EachBuildingContainer ref={top}>
                <div className="upper">
                    <p>King David Elites | Luxury Cars</p>
                </div>

                <div className="banner">
                    <h3>{selectedCar.title}</h3>
                    <h5>US {selectedCar.price}</h5>
                    <p><LocationMarker width={15} /> {selectedCar.location}.</p>
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
                        selectedCar.images.map((image) => {
                            return (
                                <>
                                    <div className='imageFlex' id={image.id} {...image} selectedCar={selectedCar}>
                                        {
                                            image.id === 1 ?
                                                <div className='imgCont'>
                                                    <img
                                                        src={selectedCar.CarPic}
                                                        alt="car"
                                                    />
                                                </div>
                                                :
                                                (
                                                    image.id <= 3 &&
                                                    <div className="image">
                                                        <img
                                                            src={image.carListed}
                                                            alt="car"
                                                        />
                                                    </div>
                                                )
                                        }
                                        {
                                            (
                                                image.id === 4 &&
                                                <MorePic imageUrl={image.carListed}>
                                                    <MoreBg
                                                        onClick={() => navigate(`${selectedCar.id}`)}
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
                    <p>Listed on {selectedCar.dateListed}</p>
                </div>

                <div className="details">
                    <div className="listDetails">
                        <h4>Car Details and Specs</h4>
                        <p>Year: {selectedCar.carDetails['Year']}</p>
                        <p>Address: {selectedCar.carDetails['Address']}</p>
                        <p>Condition: {selectedCar.carDetails['Condition']}</p>
                        <p>Brand Name: {selectedCar.DealerName}</p>
                        <p>Car Model: {selectedCar.carDetails['CarModel']}</p>
                        <p>Engine: {selectedCar.carDetails['Engine']}</p>
                        <p>Colour: {selectedCar.carDetails['Colour']}</p>
                    </div>

                    <div className="posterDetails">
                        <div className="container">
                            <h4>{selectedCar.DealerName} <BadgeCheck color="blue" width="30px" /></h4>
                            <p>Shaner estate, {selectedCar.location}.</p>
                            <p>Joined: {selectedCar.dateJoined}</p>

                            <div className="options">
                                <div className="option solid">
                                    Send Message
                                </div>

                                <div className="option">
                                    View Profile
                                </div>
                            </div>
                        </div>

                        <img src={selectedCar.CarPic} alt="dealer pic" />
                    </div>
                </div>

            </EachBuildingContainer>
            <Banner category="Cars" />
            <Footer />
        </Fragment>
    )
}

export default EachCars