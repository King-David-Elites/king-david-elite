import axios from "axios";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TimeAgo from "timeago-react";
import globalApi from "../../../api";
import { useGetUserDetails } from "../../../application/hooks/queryhooks";
import {
  requestCartItems,
  setConfig,
} from "../../../infrastructure/api/user/userRequest";
import Banner from "../../Banner/Banner";
import MainButton from "../../buttons/MainButton";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import { EachContainer } from "../RealEstate/RealEstate.Style";
import { SpinnerCircular } from "spinners-react";
import theme from "../../../application/utils/Theme";
import {
  addToCartItems,
  getCartItems,
  removeCartItems,
} from "../../../infrastructure/api/user/userRequest";

const EachCollectible = ({ active }) => {
  const top = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(requestCartItems());
  let quantity = 0;
  const [numb, setNumb] = useState(0);
  const [cartItem, setCartItem] = useState({});
  const data = useGetUserDetails();

  const scrollToRef = (ref) =>
    property && window.scrollTo(0, ref.current.offsetTop);

  const getAList = useCallback(async () => {
    await axios
      .get(`${globalApi}/listings/each/${id}`)
      .then((resp) => {
        setLoading(false);
        setProperty(resp.data);
        scrollToRef(top);
      })
      .catch((err) => console.error(err));

    axios
      .patch(`${globalApi}/listings/view/${id}`, {}, setConfig())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(async () => {
    getAList();
  }, [getAList]);

  useEffect(() => {
    getCartItem();
  }, [cartItems]);

  const getCartItem = () => {
    if (cartItems.find((item) => String(item.itemData) === id) !== undefined) {
      quantity = cartItems.find((item) => String(item.itemData) === id);
      console.log(numb)
      console.log(quantity.quantity)
      if (numb !== quantity.quantity) {
        setNumb(quantity.quantity);
      }
    }
  };

  const addToCart = async () => {
    setNumb(numb + 1);
    await addToCartItems({ collectibleId: id });
    setCartItems(requestCartItems());
  };

  const removeFromCart = async () => {    
    if (numb > 0) {
      setNumb(numb - 1);
    }
    await removeCartItems({ collectibleId: id });
    setCartItems(requestCartItems());
  };

  return (
    <Fragment>
      <Navbar active={4} />
      <EachContainer ref={top}>
        {loading ? (
          <>
            <div className="loader">
              <SpinnerCircular
                color="white"
                className="flex justify-center"
                secondaryColor={theme.color}
                size={50}
                thickness={150}
              />
            </div>
          </>
        ) : (
          <>
            <div className="titles">
              <h3>{property.title}</h3>
              <h4>&#x20A6; {property.price}</h4>
            </div>

            <div className="images">
              <div className="image1">
                <img src={property?.images && property.images[0]} alt="" />
              </div>
              <div className="grid">
                <img src={property?.images && property.images[1]} alt="" />
                <img src={property?.images && property.images[2]} alt="" />
                <img
                  src={property?.images && property.images[3]}
                  alt=""
                  loading="loading..."
                />
              </div>
              <p>
                Listed <TimeAgo datetime={property.createdAt} />
              </p>
              <Link to={`/collectible/${id}/media`}>
                <div className="viewMedia">View Images & Videos</div>
              </Link>
            </div>

            <div className="flex">
              <div className="details">
                <h3>Description</h3>
                <p>{property.description}</p>
              </div>
            </div>

            <div className="flex md:mt-9 mt-4">
              <div className="details">
                <h3>Specification</h3>
                <div className="flex md:gap-16 gap-10">
                  <div className="flex flex-col gap-2 mt-2">
                    {Object.keys(property?.collectibleFeatures).map(
                      (feature, i) => {
                        return (
                          <p key={i} className=" text-[#696969]">
                            {feature}
                          </p>
                        );
                      }
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    {Object.values(property?.collectibleFeatures).map(
                      (feature, i) => {
                        return (
                          <p key={i} className=" text-[#696969]">
                            {feature}
                          </p>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b-2 mt-10 md:mt-20"></div>

            <div className="flex gap-12 mt-10 md:mt-20">
              {numb === 0 ? (
                <>
                  <MainButton
                    background="#737373"
                    border="#737373"
                    width="50%"
                    padding="20px"
                    onClick={addToCart}
                  >
                    Add to Cart
                  </MainButton>
                </>
              ) : (
                <>
                  <div className="flex w-[50%] justify-center">
                    <div className="flex gap-5 relative items-center">
                      <div className="flex gap-7">
                        <span
                          className=" bg-theme-color w-[25px] text-[17px] text-white text-center rounded-sm cursor-pointer"
                          onClick={removeFromCart}
                        >
                          -
                        </span>
                        <p>{numb}</p>
                        <span
                          className=" bg-theme-color w-[25px] text-[17px] text-white text-center rounded-sm cursor-pointer"
                          onClick={addToCart}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <MainButton width="50%" padding="20px" color="black">
                Buy Now
              </MainButton>
            </div>
          </>
        )}
      </EachContainer>

      <Banner category="Collectibles" />
      <Footer />
    </Fragment>
  );
};

export default EachCollectible;
