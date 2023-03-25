import React, { useCallback, useEffect } from "react";
import Dashboard from "./Dashboard";
import {
  MessagesContainer,
  MobileDashboardContainer,
} from "./Dashboard.Styles";
import { BiCheckDouble, BiDotsVerticalRounded, BiVideo } from "react-icons/bi";
import { FaImages, FaSearch } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import { BsImageFill, BsPaperclip } from "react-icons/bs";
import img3 from "./Dashboard-Image/Untitled2.png";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {
  MdRealEstateAgent,
  MdMessage,
  MdAccountBalanceWallet,
  MdCall,
  MdKeyboardVoice,
  MdSend,
} from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { BsFillBellFill, BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import ChatBox from "./ChatBox";
import img from "../Home/images/c1.jpg";
import Conversation from "./Conversation";
import axios from "axios";
import globalApi from "../../api";
import { setConfig } from "../../infrastructure/api/user/userRequest";

const SenderMessage = [
  {
    id: 1,
    username: "",
    message: "Hi, Good morning",
    createdAt: "9:00am",
    isSent: false,
  },
  {
    id: 2,
    username: "",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Mauris sagittis quam tincidunt liber",
    createdAt: "8:22pm",
    isSent: false,
  },
  {
    id: 3,
    username: "",
    message: "Aiit man.",
    createdAt: "10:42am",
    isSent: false,
  },
  {
    id: 4,
    username: "",
    message: "and kindly attach the picture",
    createdAt: "10:43 am",
    isSent: false,
  },
];

const MessagesAsElement = () => {
  const [state, setState] = useState("");

  const handleOnChange = (e) => {
    setState(e.target.value);
  };

  const [conversations, setConversations] = useState();

  const getAllConversations = useCallback(() => {
    axios
      .get(`${globalApi}/conversations/user-conversations`, setConfig())
      .then((resp) => setConversations(resp.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllConversations();
  }, [getAllConversations]);

  return (
    <MessagesContainer>
      <div className="listOfMessages">
        <h3 className="title border-b-[1px]">Messages</h3>

        {/* <div className="messages">
                    <div className="message border-b-2">
                        <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                        <div className="textContent">
                            <h5>
                                Lambo Dealer
                            </h5>
                            <p>
                                How are you doing man?
                            </p>
                        </div>
                    </div>

                    <div className="message">
                        <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                        <div className="textContent">
                            <h5>
                                Lambo Dealer
                            </h5>
                            <p>
                                How are you doing man?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="eachChat"> */}
        <div className="bg-[#fff] flex fixed shadow-md w-[60%] z-10 h-[8%] justify-center items-center gap-6">
          <div className="chat-wrap">
            <div className="box-content">
              <h4 className=" font-semibold">KingDavid Team</h4>
            </div>
          </div>
          <div className="flex gap-3">
            <MdCall size={25} />
            <BiVideo size={25} />
          </div>
        </div>

        <div className="h-[92%] overflow-y-auto bg-[#D5DBE3] flex flex-col pt-[3.8em] px-[2em] pb-[0em]">
          <div className="ml-[auto] rounded mr-[auto] mb-6 w-[15%] opacity-60 bg-[#fff] flex justify-center items-center p-2">
            Today
          </div>
          {SenderMessage.map((i) => {
            return (
              <>
                <div className="flex w-fit gap-6 bg-[#0D0D0D] rounded-t-2xl rounded-r-2xl text-white p-4 mb-[0.5em] max-w-[75%]">
                  <span className="text-sm">{i.message}</span>
                  <span className="flex items-end text-[#A6A6A6] text-xs">
                    {i.createdAt}
                  </span>
                </div>

                <div className="flex justify-end">
                  <div className="flex flex-col w-fit gap-6 bg-[#FFFFFF] mt-[0.5em] mb-[0.5em] rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg text-[#252625] p-2 max-w-[75%]">
                    <div className="w-[100%] h-[100%]">
                      <img
                        className="h-[350px] max-w-[350px] object-cover"
                        src={img}
                        alt="imageSent"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px]">Here you go</span>
                      <div className="flex">
                        <span className="text-[#A6A6A6] text-xs whitespace-nowrap">
                          {" "}
                          9:02 am
                        </span>
                        <BiCheckDouble />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="h-[6%] bg-[#F5F5F5] fixed w-[60%] bottom-[4.5em] flex  items-center px-[2em]">
          <div className="flex items-center basis-1/4 gap-2">
            <FaImages size={25} />
            <BsPaperclip size={25} />
          </div>

          <div className="basis-full flex items-center">
            <textarea
              className="h-8 w-[100%] bg-[#A6A6A6] bg-opacity-20 outline-none border-none resize-none py-1 px-3 rounded-full text-[#696969]"
              name=""
              id=""
              onChange={handleOnChange}
            >
              Type message here...
            </textarea>
          </div>

          <div className="basis-1/4 flex justify-end">
            {state ? (
              <div className="rounded-full p-2 bg-[#128C7E]">
                <MdSend className="text-white" size={25} />{" "}
              </div>
            ) : (
              <div className="rounded-full p-2 bg-[#252625]">
                <MdKeyboardVoice className="text-[#F2BE5C]" size={25} />
              </div>
            )}
          </div>
        </div>
        {conversations?.map((conversation, i) => {
          return <Conversation conversationId={conversation._id} key={i} />;
        })}
      </div>
    </MessagesContainer>
  );
};

const MobileMessage = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [stage, setStage] = useState(0);

  const showMenu = () => {
    setActiveNav(!activeNav);
  };

  const navigate = useNavigate();

  const mobileNavOptions = [
    {
      no: 2,
      icon: <FaUserCircle size={20} />,
      title: "List with us",
      link: "/signup",
    },
    {
      no: 3,
      icon: <AiFillHome size={20} />,
      title: "Home",
      link: "/",
    },
    {
      no: 4,
      icon: <MdRealEstateAgent size={20} />,
      title: "Real Estate",
      link: "/real-estate",
    },
    {
      no: 5,
      icon: <IoMdCar size={20} />,
      title: "Cars",
      link: "/cars",
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

  const [conversations, setConversations] = useState();

  const getAllConversations = useCallback(() => {
    axios
      .get(`${globalApi}/conversations/user-conversations`, setConfig())
      .then((resp) => setConversations(resp.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getAllConversations();
  }, [getAllConversations]);


  return (
    <MobileDashboardContainer>
      {stage !== 0 && <ChatBox stage={stage} setStage={setStage} />}
      {stage === 0 && (
        <>
          <div className="upper-sect">
            <div className="top-items">
              <p>Message</p>
              <BiDotsVerticalRounded
                size={25}
                onClick={showMenu}
                className="cursor-pointer"
              />
            </div>

            <div className="search-mobile">
              <FaSearch color="#737373" />
              <input type="text" placeholder="Search " />
            </div>

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
                      <li key={i} onClick={() => navigate(nav?.link)}>
                        <div className="list-items">
                          {nav?.icon}
                          {nav.title}
                        </div>
                      </li>
                      {nav.no == 2 && <div className="line"></div>}
                      {nav.no == 5 && <div className="line"></div>}
                    </>
                  );
                })}

                <div className="list-item2">
                  {otherNav.map((navigation, i) => {
                    return (
                      <>
                        <li key={i} onClick={() => navigate(navigation?.link)}>
                          <div className="list-items">
                            {navigation?.icon}
                            {navigation.title}
                          </div>
                        </li>
                      </>
                    );
                  })}
                </div>
              </ul>
            </nav>
          </div>

          {/* <div className="lower-sect">
            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div className="message-wrap" onClick={() => setStage(stage + 1)}>
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div
              className="message-wrap cursor-pointer"
              onClick={() => setStage(stage + 1)}
            >
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>

            <div
              className="message-wrap cursor-pointer"
              onClick={() => setStage(stage + 1)}
            >
              <img src={img3} alt="userImg" />
              <div className="box-content">
                <h4>KingDavid Team</h4>
                <div className="markIconDiv">
                  <BiCheck />
                  <BsImageFill />
                  <p>How are you doing man?</p>
                </div>
              </div>
            </div>
          </div> */}

            {
                    conversations?.map((conversation, i)=>{
                        return(
                            <Conversation conversationId={conversation._id} key={i} />
                        )
                    })
                }
        </>
      )}
    </MobileDashboardContainer>
  );
};

const Messages = () => {
  return (
    <Dashboard
      element={<MessagesAsElement />}
      index={1}
      mobileElement={<MobileMessage />}
    />
  );
};

export default Messages;
