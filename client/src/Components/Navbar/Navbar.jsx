import React from "react";
import { Header, UL, LI, LogoText, Brand, Login } from "./Navbar.Style";
import kde_blackBg from "./Image/kde_whiteBg.png";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {
  MdRealEstateAgent,
  MdMessage,
  MdMenu,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { BsFillBellFill, BsFillHeartFill, BsCollection } from "react-icons/bs";
import "./Navbar.css";
import MainButton from "../buttons/MainButton";
import useContextAPI from "../ContextAPI/ContextAPI";
import { useDispatch } from "react-redux";
import {
  setListWithUs,
  SET_LIST_WITH_US,
} from "../../application/store/actions/user";

const Navbar = ({ bg, sticky, active }) => {
  const mainData = useContextAPI();
  const [activeNav, setActiveNav] = useState(false);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const toRun = () => {
    dispatch(setListWithUs(true));
    navigate("/profile/upgrade");
  };

  const showMenu = () => {
    setActiveNav(!activeNav);
  };

  const navigate = useNavigate();

  const navOptions = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "REAL ESTATE",
      link: "/real-estate",
    },
    {
      title: "AUTOMOBILES",
      link: "/cars",
    },
    {
      title: "LUXURY SERVICES",
      link: "/luxury-service",
    },
    {
      title: "COLLECTIBLES",
      // link: "/collectible",
    },
    {
      title: "ABOUT",
      link: "/about",
    },
  ];

  const mobileNavOptions = [
    {
      no: 0,
      icon: <FaUserCircle size={20} />,
      title: "List with us",
      link: "/dashboard/profile/verification",
    },
    {
      no: 1,
      icon: <AiFillHome size={20} />,
      title: "Home",
      link: "/",
    },
    {
      no: 2,
      icon: <MdRealEstateAgent size={20} />,
      title: "Real Estate",
      link: "/real-estate",
    },
    {
      no: 3,
      icon: <IoMdCar size={20} />,
      title: "Automobiles",
      link: "/cars",
    },
    {
      no: 4,
      icon: <FaUser size={20} />,
      title: "Luxury Services",
      link: "/luxury-service",
    },
    {
      no: 5,
      icon: <BsCollection size={20} />,
      title: "Collectibles",
      link: "/collectible",
    },
    {
      no: 6,
      icon: <FaUser size={20} />,
      title: "Profile",
      link: "/profile",
    },
    {
      no: 7,
      icon: <MdMessage size={20} />,
      title: "Messages",
      link: "/dashboard/messages",
    },
    {
      no: 8,
      icon: <BsFillBellFill size={20} />,
      title: "Notifications",
      link: "/dashboard/notifications",
    },
    {
      no: 9,
      icon: <BsFillHeartFill size={20} />,
      title: "Saved Listing",
      link: "/",
    },
    {
      no: 10,
      icon: <MdAccountBalanceWallet size={20} />,
      title: "My Account",
      link: "/dashboard/wallet",
    },
  ];

  const otherNav = [
    {
      no: 11,
      title: "Help & FAQs",
    },
    {
      no: 12,
      title: "About",
      link: "/about",
    },
    {
      no: 13,
      title: "Contact Us",
      link: "",
    },
    {
      no: 14,
      icon: <FaUserCircle size={20} />,
      title: "Log In",
      link: "/login",
    },
  ];

  const token = localStorage.getItem("token");

  return (
    <>
      <Header className="bg-cover" bg={bg} position={sticky}>
        <nav className={activeNav ? "navigation active" : "navigation"}>
          <ul>
            <div className="closed">
              <p>Welcome!</p>
              <ImCross className="close" color="#000" onClick={showMenu} />
            </div>
            <div className="line"></div>
            {mobileNavOptions.map((nav, i) => {
              return (
                <>
                  {token ? (
                    <>
                      {mainData.user.accountType === 1 ? (
                        <>
                          {nav.no !== 0 && (
                            <>
                              <li key={i} onClick={() => navigate(nav?.link)}>
                                <div className="list-items">
                                  {nav?.icon}
                                  {nav.title}
                                </div>
                              </li>
                              {nav.no === 5 && <div className="line"></div>}
                              {nav.no === 10 && <div className="line"></div>}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {nav.no === 0 ? (
                            <>
                              <li key={i} onClick={toRun}>
                                <div className="list-items">
                                  {nav?.icon}
                                  {nav.title}
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              <li key={i} onClick={() => navigate(nav?.link)}>
                                <div className="list-items">
                                  {nav?.icon}
                                  {nav.title}
                                </div>
                              </li>
                              {nav.no === 5 && <div className="line"></div>}
                              {nav.no === 10 && <div className="line"></div>}
                            </>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {nav.no === 2 ||
                      nav.no === 3 ||
                      nav.no === 4 ||
                      nav.no === 5 ? (
                        <>
                          <li key={i} onClick={() => navigate("/login")}>
                            <div className="list-items">
                              {nav?.icon}
                              {nav.title}
                            </div>
                          </li>
                          {nav.no === 5 && <div className="line"></div>}
                        </>
                      ) : (
                        <>
                          {nav.no === 1 && (
                            <li key={i} onClick={() => navigate(nav.link)}>
                              <div className="list-items">
                                {nav?.icon}
                                {nav.title}
                              </div>
                            </li>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              );
            })}

            <div className="list-item2">
              {otherNav.map((navigation, i) => {
                return (
                  <>
                    <li key={i} onClick={() => navigate(navigation?.link)}>
                      {token ? (
                        <>
                          {navigation.title !== "Log In" && (
                            <div className="list-items">
                              {navigation?.icon}
                              {navigation.title}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="list-items">
                          {navigation?.icon}
                          {navigation.title}
                        </div>
                      )}
                    </li>
                  </>
                );
              })}
            </div>
          </ul>
        </nav>
        <Brand>
          <div className="w-[40px] h-[auto]" onClick={() => navigate("/")}>
            <img
              src={kde_blackBg}
              className="w-[100%] h-[100%] cursor-pointer"
              alt="brandlogo"
            />
          </div>
          <LogoText onClick={() => navigate("/")}>KING DAVID ELITES</LogoText>

          <div className="menu-icon">
            <MdMenu size={30} className="menu" onClick={showMenu} />
          </div>
        </Brand>

        <div>
          <UL>
            {navOptions.map((nav, i) => {
              return (
                <>
                  {token ? (
                    <LI key={i} onClick={() => navigate(nav.link)}>
                      <div className={active === i && "item-active"}>
                        {nav.title}
                      </div>
                    </LI>
                  ) : (
                    <>
                      {nav.title !== "ABOUT" && nav.title !== "HOME" ? (
                        <LI key={i} onClick={() => navigate("/login")}>
                          <div className={active === i && "item-active"}>
                            {nav.title}
                          </div>
                        </LI>
                      ) : (
                        <LI key={i} onClick={() => navigate(nav.link)}>
                          <div className={active === i && "item-active"}>
                            {nav.title}
                          </div>
                        </LI>
                      )}
                    </>
                  )}
                </>
              );
            })}
          </UL>
        </div>

        <Login>
          {token ? (
            <>
              {mainData.user.accountType === 1 ? (
                <div onClick={() => navigate("/profile")} className="dashboard">
                  DASHBOARD
                </div>
              ) : (
                <div className="cursor-pointer text-sm" onClick={toRun}>
                  LIST WITH US
                </div>
              )}
            </>
          ) : (
            <MainButton
              color="#000"
              className="login"
              onClick={() => navigate("/login")}
            >
              LOG IN
            </MainButton>
          )}

          <MdMenu
            size={30}
            className="menu cursor-pointer"
            onClick={showMenu}
          />
        </Login>
      </Header>
    </>
  );
};

export default Navbar;
