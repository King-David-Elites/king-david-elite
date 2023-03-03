import { ChatBoxContainer } from "./Dashboard.Styles";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BiCheckDouble, BiVideo } from "react-icons/bi";
import { MdCall, MdKeyboardVoice, MdSend } from "react-icons/md";
import img3 from "./Dashboard-Image/Untitled2.png";
import { BsPaperclip } from "react-icons/bs";
import { FaImages } from "react-icons/fa";
import theme from "../../application/utils/Theme";
import img from "../Home/images/c1.jpg";
import { useState, useEffect, useCallback } from "react";
import { a, useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { setConfig } from "../../infrastructure/api/user/userRequest";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import TimeAgo from "timeago-react";
import globalApi from "../../api";


const ChatBox = ({ setStage }) => {
  const [state, setState] = useState("");
  const user = useGetUserDetails()
  const {id} = useParams()
  const [toChat, setToChat] = useState({});
  const navigate = useNavigate()

  const getUser = useCallback((toToCheck)=>{
    axios.get(`${globalApi}/users/${toToCheck}`, setConfig())
    .then(resp => {
        setToChat(resp.data)
    })
    .catch(err => console.log(err))
  }, [id])


  const handleOnChange = (e) => {
    setState(e.target.value);
  };

  const [messages, setMessages] = useState([])

  const getAllMessages = useCallback(()=>{
     axios.get(`${globalApi}/messages/${id}`, setConfig())
    .then(resp => {
        console.log(resp.data)
        setMessages(resp.data)
    })
    .catch(err => console.log(err))

    axios.get(`${globalApi}/conversations/${id}`, setConfig())
    .then(resp => {
        const toChatId = resp.data.members.filter(id => id !== user._id)[0]
        getUser(toChatId)
    })
    .catch(err => console.log(err))

  }, [id])

  useEffect(()=>{
   getAllMessages()
  }, [getAllMessages])

  const [message, setMessage] = useState()

  const sendMessage = ()=>{
    setState("")
    axios.post(`${globalApi}/messages/send-message`, {
        conversationId: id,
        messageContent: state,
    } ,setConfig())
    .then(resp => {
      getAllMessages()
    })
    .catch(err => console.log(err))
  }

  return (
    <ChatBoxContainer>
      <div className="header-sect">
        <MdOutlineArrowBackIosNew
          size={25}
          className="cursor-pointer"
          color={theme.neutralColor}
          onClick={() => navigate(-1)}
        />
        <div className="chat-wrap">
          <img src={toChat?.profilePicture} alt="userImg" />
          <div className="box-content">
            <h4>{toChat.firstName + " " + toChat.lastName}</h4>
            <div className="markIconDiv"></div>
          </div>
        </div>
        <div className="calls">
          <MdCall color="#696969" size={25} />
          <BiVideo color="#696969" size={25} />
        </div>
      </div>

      <div className="chat-body">
        <div className="date">Today</div>
        {messages.map((message, i) => {
          return (
            <>
            {
              message.sender._id != user._id ?
               <div className="reviever-chat">
                <span className="text-sm">{message.messageContent}</span>
                <span className="span2"><TimeAgo datetime={message.createdAt} /></span>
              </div>
              :

              <div className="section-end">
                <div className="sender-chat">
                  {/* <div className="w-[100%] h-[100%]">
                    <img
                      className="h-[350px] object-cover"
                      src={img}
                      alt="imageSent"
                    />
                  </div> */}
                  <div className="flex items-center justify-between">
                    <span className="text-[14px]">{message.messageContent}</span>
                    <div className="flex">
                      <div className="span1 whitespace-nowrap"><TimeAgo datetime={message.createdAt} /></div>
                      <BiCheckDouble />
                    </div>

                    
                  </div>
                </div>
              </div>
            }
              

              
            </>
          );
        })}
      </div>

      <div className="typing-box">
        <FaImages size={25} />
        <BsPaperclip size={25} />

        <div className="typing-div">
          <textarea name="" id="" value={state} placeholder="Type message here..." onChange={handleOnChange}>
            
          </textarea>
        </div>

        {state ? (
          <div className="rounded-full p-2 bg-[#128C7E]">
            <MdSend className="text-white" size={25} onClick={()=> sendMessage()}/>{" "}
          </div>
        ) : (
          <div className="rounded-full p-2 bg-[#252625]">
            <MdKeyboardVoice className="text-[#F2BE5C]" size={25} />
          </div>
        )}
      </div>
    </ChatBoxContainer>
  );
};

export default ChatBox;
