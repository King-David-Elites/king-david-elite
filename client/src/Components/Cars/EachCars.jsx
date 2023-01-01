import { LocationMarker, BadgeCheck } from "heroicons-react";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { EachBuildingContainer } from "../RealEstate/RealEstate.Style";
import { CarAPI } from "./MockAPI/api";
import Banner from "../Banner/Banner";
import { useNavigate } from "react-router-dom";
import { MorePic, Text, MoreBg } from "./Cars.Style";
import theme from "../../application/utils/Theme";
import { useRef } from "react";
import axios from "axios";
import TimeAgo from "timeago-react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const EachCars = ({ active }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState({});
  // const selectedCar = CarAPI.find((items) => items.title === title);
  const MediaType = [
    {
      link: `/cars/${property.title}`,
      media: "Photos",
    },
    {
      link: `/cars/${property.title}/videos`,
      media: "Videos",
    },
  ];
  const top = useRef(null);

  useEffect(() => {
    scrollToRef(top);
  }, []);

  

  const getAList = useCallback(() => {
    axios
      .get(`https://kde.cyclic.app/listings/each/${id}`)
      .then((resp) => setProperty(resp.data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    getAList();
  }, [getAList]);

  return (
    <Fragment>
      <Navbar bg="black" sticky="sticky" />

      <EachBuildingContainer ref={top}>
        <div className="upper">
          <p>King David Elites | Luxury Cars</p>
        </div>

        <div className="banner">
          <h3>{property.title}</h3>
          <h5>US {property.price}</h5>
          <p>
            <LocationMarker width={15} /> {property.location}.
          </p>
        </div>

        <div className="mediaType">
          {MediaType.map((mediatype, i) => {
            return (
              <Text
                style={{ cursor: "pointer" }}
                key={i}
                color={active === i ? theme.color : "black"}
                onClick={() => navigate(mediatype.link)}
              >
                {mediatype.media}
              </Text>
            );
          })}
        </div>

        {/* <div className="imageGallery">
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
                </div> */}

        <div className="imageGallery">
          {property.images?.map((image, i) => {
            console.log(image);
            return (
              <>
                <div
                  className="imageFlex"
                  id={i}
                  {...image}
                  selectedBuilding={property}
                >
                  {
                    <div className="image">
                      <img src={image} alt="realestate" />
                    </div>
                  }
                </div>
              </>
            );
          })}
        </div>

        <div className="details">
          <div className="listDetails">
            <h4>Car Details and Specs</h4>
            <p>Year: {property.year}</p>
            <p>Address: {property.location}</p>
            <p>Condition: {property.carConditionb}</p>
            <p>Brand Name: {property.title}</p>
            <p>Engine: {property.engineType}</p>
            <p>Colour: {property.colour}</p>
          </div>

          <div className="posterDetails">
            <div className="container">
              <h4>
              {property.postedBy?.firstName + " " + property.postedBy?.lastName}
                <BadgeCheck color="blue" width="30px" />
              </h4>
              <p>Shaner estate, {property.location}.</p>
              <p>Joined:<TimeAgo datetime={property.postedBy?.createdAt}/></p>

              <div className="options">
                <div className="option solid">Send Message</div>

                <div className="option">View Profile</div>
              </div>
            </div>

            <img src={property.postedBy?.profilePicture} alt="dealer pic" />
          </div>
        </div>
      </EachBuildingContainer>
      <Banner category="Cars" />
      <Footer />
    </Fragment>
  );
};

export default EachCars;
