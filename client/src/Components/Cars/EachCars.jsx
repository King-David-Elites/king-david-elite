import { LocationMarker } from 'heroicons-react'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { BottomBanner, EachBuildingContainer } from '../RealEstate/RealEstate.Style'
import carpic from './Image/carpic.jpg'

const EachCars = () => {
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
                <img src={carpic} alt="" />
                <img src={carpic} alt="" />
                <img src={carpic} alt="" />
                <img src={carpic} alt="" />
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

                    <img src={carpic} alt="" />
                </div>
            </div>

            <BottomBanner url={carpic}>
                <h1>Luxury Cars</h1>
                <p>King David Elites</p>
            </BottomBanner>

            <Footer />
        </EachBuildingContainer>
    </Fragment>
  )
}

export default EachCars