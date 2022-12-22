import { ChatBoxContainer } from "./Dashboard.Styles";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { BiVideo } from 'react-icons/bi'
import { MdCall, MdKeyboardVoice } from 'react-icons/md'
import img3 from './Dashboard-Image/Untitled2.png';
import { BsPaperclip } from 'react-icons/bs';
import { FaImages } from 'react-icons/fa';
import theme from "../../application/utils/Theme";
import MessageBody from "./MessageBody";


const SenderMessage = [
    {
        id: 1,
        username: "",
        message: "Hi, Good morning",
        createdAt: "9:00am",
        isSent: false
    },
    {
        id: 2,
        username: "",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscingelit. Mauris sagittis quam tincidunt liber",
        createdAt: "8:22pm",
        isSent: false
    },
    {
        id: 3,
        username: "",
        message: "Aiit man.",
        createdAt: "10:42am",
        isSent: false
    },
    {
        id: 4,
        username: "",
        message: "and kindly attach the picture",
        createdAt: "10:43 am",
        isSent: false
    },
]


const ChatBox = () => {
    return (
        <ChatBoxContainer>
            <div className="header-sect">
                <MdOutlineArrowBackIosNew size={25} color={theme.neutralColor} />
                <div className='chat-wrap'>
                    <img src={img3} alt="userImg" />
                    <div className='box-content'>
                        <h4>KingDavid Team</h4>
                        <div className='markIconDiv'>

                        </div>
                    </div>
                </div>
                <div className="calls">
                    <MdCall color="#696969" size={25} />
                    <BiVideo color="#696969" size={25} />
                </div>
            </div>

            <div className="chat-body">
                <MessageBody message={
                    SenderMessage.map((i) => {
                        return i.message
                    })}>
                </MessageBody>
            </div>

            <div className="typing-box">
                <FaImages size={25} />
                <BsPaperclip size={25} />

                <div className="typing-div">
                    <textarea
                        name="" id="" >Type message here,...</textarea>
                </div>

                <MdKeyboardVoice size={25} />
            </div>
        </ChatBoxContainer>
    );
}

export default ChatBox;