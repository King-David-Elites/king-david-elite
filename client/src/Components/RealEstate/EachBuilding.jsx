import { LocationMarker } from 'heroicons-react'
import React from 'react'
import { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { BottomBanner, EachBuildingContainer } from './RealEstate.Style'
import realEstatePics from './Image/real-estate-pics.jpg'
import Banner from "../Banner/Banner";
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'

const EachBuilding = () => {
    const {title} = useParams()
  return (
    <Fragment>
        <Navbar bg="black" sticky="sticky"/>

        <EachBuildingContainer>
            <div className="upper">
                <p>King David Elites | Luxury Cars</p>
            </div>

            <div className="banner">
                <h3>{title}</h3>
                <h5>US $287,000.00</h5>
                <p><LocationMarker width={15}/> Doha, Quatar.</p>
            </div>

            <div className="imageGallery">
                <img src={realEstatePics} alt="" />
                <img src={realEstatePics} alt="" />
                <img src={realEstatePics} alt="" />
                <img src={realEstatePics} alt="" />
                <p>Listed on June 28, 2022</p>
            </div>

            <div className="details">
                <div className="listDetails">
                    <h4>Car Details and Specs</h4>
                    <p>Year: 2018</p>
                    <p>Address: 11B Shanar, Doha, Quatar</p>
                    <p>Condition: Preowned</p>
                    <p>Brand Name: Rolls Royce</p>
                    <p>Car Model: Dusk</p>
                    <p>Engine: V16</p>
                    <p>Colour: White</p>
                </div>

                <div className="posterDetails">
                    <div className="container">
                        <h4>Lambo Dealer</h4>
                        <p>Shaner estate, Doha, Qatar.</p>
                        <p>Joined: 28th July, 2022</p>

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

            <BottomBanner url={realEstatePics}>
                <h1>Luxury Cars</h1>
                <p>King David Elites</p>
            </BottomBanner>
            <Banner category="Real Estate"/>

            <Footer />
            
        </EachBuildingContainer>
    </Fragment>
  )
}

export default EachBuilding