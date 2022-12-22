import { BiCheckDouble } from 'react-icons/bi'

const MessageBody = ({message, createdAt}) => {
    return (
        <div className="chat-body">
            <div className="date">Today</div>

            <div className="reviever-chat">
                <span>{message}
                </span>
                <span className="span2"> {createdAt}</span>
            </div>

           

            <div className="section-end">
                <div className="sender-chat">
                    <span>Hi, Good morning
                    </span>

                    <div>                     <span className="span1"> 9:02 am</span>                         <BiCheckDouble />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MessageBody;