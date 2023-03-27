import { FaTrashAlt } from "react-icons/fa";
import theme from "../../../application/utils/Theme";
import { GlobalContainer } from "../../About/About.Styled";
import MainButton from "../../buttons/MainButton";
import Navbar from "../../Navbar/Navbar";
import { Text } from "../Cars/Cars.Style";
import img from "../Cars/Img/estate4.jpg";
import { useState, useEffect } from "react";
import { getCartItems } from "../../../infrastructure/api/user/userRequest";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    if(cartItems.length === 0){
        getCartItems(setCartItems)
    }
  },[])
  return (
    <div className="bg-[#f5f5f5] h-[100vh]">
      <Navbar active={6} />
      <div className="md:p-[8em] px-[1em] py-[4em] flex flex-col md:flex-row md:gap-5 gap-2 w-[100vw] ">
        <div className="md:hidden block py-[5px] px-0 text-[18px] font-semibold mt-3">
          Cart (3)
        </div>
        <GlobalContainer
          margin="10px 0"
          className="shadow-md bg-white p-3 md:px-[1.5em] md:py-[0.5em] md:w-3/4 h-auto"
        >
          <Text
            color="black"
            className="border-b-2 md:block hidden"
            padding="5px 0"
            fontSize="18px"
            font-weight="600"
          >
            Cart (3)
          </Text>

          <div className="mt-3 flex gap-5 relative">
            <div className="w-[80px] h-[80px]">
              <img src={img} alt="contentImg" width="100%" height="auto" />
            </div>
            <p>A Luxury Market And Networking Platform For All</p>

            <span className="absolute md:right-1 md:block hidden">
              $400,000
            </span>
          </div>
          <p className="md:hidden flex justify-end mt-[-1em] mb-[1em] font-medium">
            $400,000
          </p>

          <div className="flex gap-5 relative items-center">
            <FaTrashAlt size={20} color={theme.color} />
            <p className="text-theme-color">REMOVE</p>
            <div className="absolute right-1 flex gap-7">
              <span className=" bg-theme-color w-[25px] text-[17px] text-white text-center rounded-sm">
                -
              </span>
              <p>3</p>
              <span className=" bg-theme-color w-[25px] text-[17px] text-white text-center rounded-sm">
                +
              </span>
            </div>
          </div>
        </GlobalContainer>

        <GlobalContainer className="shadow-md bg-white px-[1.5em] md:flex hidden py-[0.5em] w-1/4 h-[auto]  flex-col gap-2 relative">
          <Text
            color="black"
            className="border-b-2"
            padding="5px 0"
            fontSize="16px"
            font-weight="500"
          >
            CART SUMMARY
          </Text>
          <p>Total: $13, 350</p>
          <MainButton className="absolute left-[0.75em] bottom-3" width="20em">
            Checkout ($13, 350)
          </MainButton>
        </GlobalContainer>

        <div className="md:hidden flex bg-theme-color w-full py-[12px] px-[24px] cursor-pointer justify-center rounded-md text-white">
          Checkout ($13, 350)
        </div>
      </div>
    </div>
  );
};

export default Cart;
