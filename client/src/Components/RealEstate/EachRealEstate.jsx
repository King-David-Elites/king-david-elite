import axios from "axios";
import { LocationMarker } from "heroicons-react";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TimeAgo from "timeago-react";
import globalApi from "../../api";
import { setConfig } from "../../infrastructure/api/user/userRequest";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { EachContainer } from "./RealEstate.Style";

const EachRealEstate = ({ active }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState({});

  const getAList = useCallback(() => {
    axios
      .get(`${globalApi}/listings/each/${id}`)
      .then((resp) => {
        setProperty(resp.data);
      })
      .catch((err) => console.error(err));

    axios.patch(`${globalApi}/listings/view/${id}`,{} ,setConfig())
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  }, [id]);

  useEffect(() => {
    getAList();
  }, [getAList]);

  return (
    <Fragment>
      <Navbar />
      <EachContainer>
        <div className="titles">
          <h3>{property.title}</h3>
          <h4>US ${property.price}</h4>
          <p>
            <LocationMarker /> {property.location}
          </p>
        </div>

        <div className="images">
          <div className="image1">
            <img
              src={property?.images && property.images[0]}
              alt=""
            />
          </div>
          <div className="grid">
            <img
              src={property?.images && property.images[1]}
              alt=""
            />
            <img
              src={property?.images && property.images[2]}
              alt=""
            />
            <img
              src={property?.images && property.images[2]}
              alt=""
              loading="loading..."
            />
          </div>
          <p>
            Listed <TimeAgo datetime={property.createdAt} />
          </p>
          <div className="viewMedia">View Images & Videos</div>
        </div>

        <div className="amenities">
          <div className="details">
            <h3>Amenities</h3>
            {property.features?.map((feature, i) => {
              return <p key={i}>{feature}</p>;
            })}
          </div>
        </div>

        <div className="description">
          <div className="details">
            <h3>Description</h3>
            <p>
              {property.description}
            </p>
          </div>

          <div className="seller">
            <h3>Contact Seller</h3>

            <div className="container">
              <div className="first">
                <div>
                  <h3>{property.postedBy?.firstName + " " + property.postedBy?.lastName}</h3>
                  <p className="small">{property.postedBy?.address}</p>
                  <p className="small">Joined {new Date(property.postedBy?.createdAt).getFullYear()}</p>
                </div>

                <div className="btns">
                  <div className="btn filled">Send Message</div>

                  <Link to={`/profile/${property.postedBy?._id}`} className="btn">View Profile</Link>
                </div>
              </div>

              <div className="second">
                <img
                  src={property.postedBy?.profilePicture}
                  alt={property.postedBy?.firstName}
                />
              </div>
            </div>
          </div>
        </div>
      </EachContainer>
      <Banner category="Real Estate" />
      <Footer />
    </Fragment>
  );
};

export default EachRealEstate;
