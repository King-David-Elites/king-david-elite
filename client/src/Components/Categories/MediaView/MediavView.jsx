import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import { ArrowLeft } from "heroicons-react";
import { useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { EachBuildingContainer } from "../RealEstate/RealEstate.Style";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import globalApi from "../../../api";
import Banner from "../../Banner/Banner";
import { useNavigate } from "react-router-dom";
import MainButton from "../../buttons/MainButton";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const EachCarPhotos = () => {
  const navigate = useNavigate();
  const top = useRef(null);
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const getAList = useCallback(() => {
    console.log("fetching");
    axios
      .get(`${globalApi}/listings/each/${id}`)
      .then((resp) => {
        setProperty(resp.data);
        setLoading(false);
        console.log(resp.data);
      })
      .catch((err) => console.error(err));

    axios
      .patch(`${globalApi}/listings/view/${id}`, {}, setConfig())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getAList();
    scrollToRef(top);
  }, [getAList]);

  return (
    <>
      <EachBuildingContainer ref={top}>
        <div className="upper">
          <div
            className="upperContent"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <ArrowLeft width="20px" />
            <p>Back</p>
          </div>
          <div className="medias">
            <MainButton
              onClick={() => {
                setActive(0);
              }}
            >
              Photos
            </MainButton>
            <MainButton
              onClick={() => {
                setActive(1);
              }}
            >
              Video
            </MainButton>
          </div>
        </div>
        {active == 0 && (
          <div className="imageGallery">
            {loading ? (
              <>
                <div className="loadingImages" />
                <div className="loadingImages" />
                <div className="loadingImages" />
                <div className="loadingImages" />                
                <div className="loadingImages" />
                <div className="loadingImages" />
                <div className="loadingImages" />
                <div className="loadingImages" />  
              </>
            ) : (
              <>
                {property.images.map((image) => {
                  return (
                    <>
                      <div className="image">
                        <img src={image} alt="media photos" />
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        )}
        {active == 1 && (
          <div className="imageGallery">
            {loading ? (
              <>
                <div className="loadingImages" />                
              </>
            ) : (
              <>
                {property.videos.map((video) => {
                  return (
                    <>
                      <div>
                        <div className="image">
                          <video width="300px" height="300px" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        )}
      </EachBuildingContainer>
      <Banner category="Real Estate" />
      <Footer />
    </>
  );
};

export default EachCarPhotos;
