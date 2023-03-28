import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import theme from "../../../application/utils/Theme";
import { GlobalContainer } from "../../About/About.Styled";
import MainButton from "../../buttons/MainButton";
import Navbar from "../../Navbar/Navbar";
import { Text } from "../Cars/Cars.Style";
import { useState, useEffect, useCallback } from "react";
import globalApi from "../../../api";
import { SpinnerCircular } from "spinners-react";
import {
  getCartItems,
  addToCartItems,
  removeCartItems,
  clearCartItems,
  requestCartItems,
  setConfig,
} from "../../../infrastructure/api/user/userRequest";

const Cart = () => {
  const [cartItems, setCartItems] = useState(requestCartItems());
  const [cartDetails, setCartDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [changed, setChanged] = useState(false)
//   const [numb, setNumb] = useState(0);

  const getAList = useCallback(async (Id) => {
    let response;
    await axios
      .get(`${globalApi}/listings/each/${Id}`)
      .then((resp) => {
        response = resp.data;
      })
      .catch((err) => {
        getAList(Id);
        console.error(err);
      });

    axios
      .patch(`${globalApi}/listings/view/${Id}`, {}, setConfig())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    return response;
  }, []);

  useEffect(()=>{
    setCartDetails(cartDetails)
  },[changed])

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    let mockCart = cartItems;
    if (mockCart.length === 0) {
      await getCartItems();
      mockCart = requestCartItems();
      console.log(mockCart);
      if (mockCart.length > 0) {
        setCartItems(mockCart);
      }
    } else {
      getCartDetails(cartItems);
    }
  };

  const getCartDetails = (cartItems) => {
    let mockCartDetails = [];
    let sum = 0;
    cartItems.forEach(async (item) => {
      let property;
      if (item.itemData._id !== undefined) {
        property = await getAList(item.itemData._id);
        mockCartDetails.push({
          id: item.itemData._id,
          image: property.images[0],
          title: property.title,
          price: property.price,
          quantity: item.quantity,
        });
        sum += parseInt(property.price) * parseInt(item.quantity);
      } else {
        property = await getAList(item.itemData);
        mockCartDetails.push({
          id: item.itemData,
          image: property.images[0],
          title: property.title,
          price: property.price,
          quantity: item.quantity,
        });
        sum += parseInt(property.price) * parseInt(item.quantity);
        console.log(sum);
        setTotal(sum);
      }
    });
    setCartDetails(mockCartDetails);
  }; 

  const addToCart = async (id) => {
    cartDetails.forEach((element) => {
      if (element.id == id) {
        element.quantity += 1;
      }
    });
    setChanged(!changed)
    await addToCartItems({ collectibleId: id });    
    // setCartItems(requestCartItems());
  };

  const removeFromCart = async (id) => {
    cartDetails.forEach((element) => {
      if (element.id == id) {
        if (element.quantity > 0) {
          element.quantity -= 1;
        }
      }
    });
    setChanged(!changed)
    await removeCartItems({ collectibleId: id });    
    // setCartItems(requestCartItems());
  };

  return (
    <div className="bg-[#f5f5f5] h-[100vh] overflow-auto">
      <Navbar active={6} />
      <div className="md:p-[8em] px-[1em] py-[4em] flex flex-col md:flex-row md:gap-5 gap-2 w-[100vw] ">
        <div className="md:hidden block py-[5px] px-0 text-[18px] font-semibold mt-3">
          Cart ({cartDetails.length})
        </div>
        <GlobalContainer
          margin="10px 0"
          className="shadow-md p-3 flex flex-col justify-center items-center md:px-[1.5em] md:py-[0.5em] md:w-3/4 h-auto "
        >
          <Text
            color="black"
            className="md:block hidden"
            padding="5px 0"
            fontSize="18px"
            font-weight="600"
          >
            Cart ({cartDetails.length})
          </Text>
          {cartDetails.length !== cartItems.length ? (
            <>
              <SpinnerCircular
                color="white"
                className="flex justify-center"
                secondaryColor={theme.color}
                size={50}
                thickness={150}
              />
            </>
          ) : (
            <>
              {cartDetails.map((cart, i) => {
                return (
                  <>
                    <div key={i} className="border-t-2 my-8 w-full">
                      <div className="mt-3 flex gap-5 relative">
                        <div className="w-[80px] h-[80px]">
                          <img
                            src={cart?.image}
                            alt="contentImg"
                            width="100%"
                            height="auto"
                          />
                        </div>
                        <p className="font-bold">{cart?.title}</p>

                        <span className="absolute md:right-1 md:block hidden">
                          &#x20A6; {cart?.price}
                        </span>
                      </div>
                      <p className="md:hidden flex justify-end mt-[-1em] mb-[1em] font-medium">
                        &#x20A6; {cart?.price}
                      </p>

                      <div className="flex gap-5 mt-5 relative items-center">
                        <FaTrashAlt size={20} color={theme.color} />
                        <p className="text-theme-color">REMOVE</p>
                        <div className="absolute right-1 flex gap-7">
                          <span
                            className=" bg-theme-color w-[25px] text-[17px] text-white text-center rounded-sm cursor-pointer"
                            onClick={() => {
                              removeFromCart(cart?.id);
                            }}
                          >
                            -
                          </span>
                          <p>{cart?.quantity}</p>
                          <span
                            className=" bg-theme-color w-[25px] text-[17px] text-white text-center rounded-sm cursor-pointer"
                            onClick={() => {
                              addToCart(cart?.id);
                            }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </GlobalContainer>

        <GlobalContainer className="shadow-md bg-white px-[1.5em] md:flex hidden py-[0.5em] w-1/4 h-60  flex-col gap-2 relative">
          <Text
            color="black"
            className="border-b-2"
            padding="5px 0"
            fontSize="16px"
            font-weight="500"
          >
            CART SUMMARY
          </Text>
          <p>Total: &#x20A6; {total}</p>
          <MainButton className="absolute left-[0.75em] bottom-3" width="20em">
            Checkout (&#x20A6; {total})
          </MainButton>
        </GlobalContainer>

        <div className="md:hidden flex bg-theme-color w-full py-[12px] px-[24px] cursor-pointer justify-center rounded-md text-white">
          Checkout (&#x20A6; {total})
        </div>
      </div>
    </div>
  );
};

export default Cart;
