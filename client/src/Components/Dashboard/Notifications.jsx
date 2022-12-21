import React from "react";
import { FaInbox } from "react-icons/fa";
import Dashboard from "./Dashboard";
import {
  MobileDashboardContainer,
  NotificationContainer,
} from "./Dashboard.Styles";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import ReadMoreReadLess from "./ReadMoreReadLess";
import theme from "../../application/utils/Theme";

const NotificationAsElement = ({showLess, setShowLess, message}) => {
  return (
    <NotificationContainer>
      <div className="notification">
        <div className="icon">
          <FaInbox size={30} />
        </div>

        <div className="content">
          <p className="title">Login attempted from a new IP</p>
          <ReadMoreReadLess
            className="sub"
            showLess={showLess}
            setShowLess={setShowLess}
            message={message}
          />
          {/* The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess> */}
        </div>

        <div className="time">4:43pm</div>
      </div>

      <div className="notification">
        <div className="icon">
          <FaInbox size={30} />
        </div>

        <div className="content">
          <p className="title">Login attempted from a new IP</p>
          <ReadMoreReadLess
            className="sub"
            showLess={showLess}
            setShowLess={setShowLess}
            message={message}
          />
          {/* The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess> */}
        </div>

        <div className="time">4:43pm</div>
      </div>

      <div className="notification">
        <div className="icon">
          <FaInbox size={30} />
        </div>

        <div className="content">
          <p className="title">Login attempted from a new IP</p>
          <ReadMoreReadLess
            className="sub"
            showLess={showLess}
            setShowLess={setShowLess}
            message={message}
          />
          {/* The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess> */}
        </div>

        <div className="time">4:43pm</div>
      </div>
    </NotificationContainer>
  );
};

const MobileNotification = ({showLess, setShowLess, message}) => {
  return (
    <MobileDashboardContainer>
      <div className="upper-sect">
        <div className="top-items">
          <p>Notification</p>
          <BiDotsVerticalRounded size={25} />
        </div>

        <div className="search-mobile">
          <FaSearch color="#737373" />
          <input type="text" placeholder="Search " />
        </div>
      </div>

      <div className="notification-items">
        <FaCheckCircle size={30} className="tick" color = {showLess ? "#000" : theme.neutralColor}/>
        <div className="lower-sect box-content div1">
          <h4 style={{ color: showLess ? "#000" : theme.neutralColor }}>Verify your account</h4>
          <ReadMoreReadLess
            className="sub"
            showLess={showLess}
            setShowLess={setShowLess}
            message={message}
          />
          {/* The system has detected that your account is logged in from an unused IP address.
                    </ReadMoreReadLess> */}
        </div>

        <div className="lower-sect box-content div2">
          <span>4:43 pm</span>
          <p>yesterday</p>
        </div>
      </div>

      <div className="notification-items">
        <FaCheckCircle size={30} className="tick" color = {showLess ? "#000" : theme.neutralColor}/>
        <div className="lower-sect box-content div1">
          <h4 style={{ color: showLess ? "#000" : theme.neutralColor }}>Deposit Successful</h4>
          <ReadMoreReadLess
            className="sub"
            showLess={showLess}
            setShowLess={setShowLess}
            message="You have successfully made a deposit of $4,000 to your account at 10
            - 06 - 2022. If you don’t recogn..."
          />
          {/* <ReadMoreReadLess>
            You have successfully made a deposit of $4,000 to your account at 10
            - 06 - 2022. If you don’t recogn...
          </ReadMoreReadLess> */}
        </div>

        <div className="lower-sect box-content div2">
          <span>4:43 pm</span>
          <p>19 - july</p>
        </div>
      </div>

      <div className="notification-items">
        <FaCheckCircle size={30} className="tick" color = {showLess ? "#000" : theme.neutralColor}/>
        <div className="lower-sect box-content div1">
          <h4 style={{ color: showLess ? "#000" : theme.neutralColor }}>Login attempted from a new IP</h4>
          <ReadMoreReadLess
            className="sub"
            showLess={showLess}
            setShowLess={setShowLess}
            message={message}
          />
          {/* <ReadMoreReadLess>
            The system has detected that your account is logged in from an
            unused IP address.
          </ReadMoreReadLess> */}
        </div>

        <div className="lower-sect box-content div2">
          <span>4:43 pm</span>
          <p>Today</p>
        </div>
      </div>
    </MobileDashboardContainer>
  );
};

const Notifications = () => {
  const [showLess, setShowLess] = useState(true);
  const [message, setMessage] = useState(
    "The system has detected that your account is logged in from an unused IP address."
  );
  return (
    <Dashboard
      element={
        <NotificationAsElement
          showLess={showLess}
          setShowLess={setShowLess}
          message={message}
        />
      }
      index="3"
      mobileElement={
        <MobileNotification
          showLess={showLess}
          setShowLess={setShowLess}
          message={message}
        />
      }
    />
  );
};

export default Notifications;
