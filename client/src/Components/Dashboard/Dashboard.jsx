import React from 'react'
import { navigators } from './contents'
import { DashboardContainer, LeftContainer, RightContainer } from './Dashboard.Styles'
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import kde_whiteBg from '../Navbar/Image/kde_whiteBg.png'
import { LogoText } from '../Navbar/Navbar.Style'
import { useSelector } from "react-redux";
import useAuthentication from '../../application/hooks/useAuthentication'

const Dashboard = ({element, index}) => {
    useAuthentication();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const userFirstName = user.firstName;
    const userLastName = user.lastName;
    const userEmail = user.email;

  return (
    <DashboardContainer>
        <LeftContainer>
            <div
             className="top_logo"
             onClick={()=> navigate("/")}
            >
                <img src={kde_whiteBg} alt="" />
                <LogoText>
                    KING DAVID ELITE
                </LogoText>
                
            </div>

            <div className="nav_items">
                {
                navigators.map((nav, i)=>{
                    return(
                        <div key={i} className={ index === i +1 ? "item active" : "item"} onClick={()=> navigate(`/dashboard/${nav.link}`)}>
                            <p>{nav.icon }</p>
                            <p>{nav.title}</p>
                        </div>
                    )
                })
            }
            </div>
            
        </LeftContainer>

        <RightContainer>
            <div className="top">
                <div className="search">
                    <FaSearch color='#737373' />
                    <input type="text" placeholder='search '/>
                </div>

                <div className="profile" onClick={()=> navigate("/profile")}>
                    <img src="https://th.bing.com/th/id/R.b304c7b0e1751794c05ca44d94cea47a?rik=s5ONNlybUyekZg&pid=ImgRaw&r=0" alt="" />

                    <div className="textContent">
                        <h6>{userFirstName?.toUpperCase()} {userLastName?.toUpperCase()}</h6>
                        <p>{userEmail}</p>
                    </div>
                </div>
            </div>

            <div className="mainContent">
                {element}
            </div>

        </RightContainer>
    </DashboardContainer>
  )
}

export default Dashboard