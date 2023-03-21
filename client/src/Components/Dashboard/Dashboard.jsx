import React, { useState, useEffect } from 'react'
import { navigators } from './contents'
import { DashboardContainer, LeftContainer, RightContainer, MobileDashboardContainer } from './Dashboard.Styles'
import { FaSearch } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import kde_whiteBg from '../Navbar/Image/kde_whiteBg.png'
import { LogoText } from '../Navbar/Navbar.Style'
import useAuthentication from '../../application/hooks/useAuthentication'
import { useGetUserDetails } from '../../application/hooks/queryhooks'
import { useDispatch, useSelector } from 'react-redux'
import { MdArrowDropDown } from 'react-icons/md'
import { setLoggedInUserDetails } from '../../application/store/actions/user'
import { setLoading } from '../../application/store/actions/ui'


const Dashboard = ({ element, index, mobileElement }) => {
    useAuthentication();
    const navigate = useNavigate();
    const { data } = useGetUserDetails();
    const [loggedInUser, setLoggedInUser] = useState([]);
    const userProfilePics = useSelector(state => state.user.profilePicture);
    const userfirstName = useSelector(state => state.user?.firstName);
    const userLastName = useSelector(state => state.user?.lastName);
    const dispatch = useDispatch();

    const logOut = () => {
        // dispatch(setLoggedInUserDetails({ userId: '', }));
        // localStorage.removeItem('user');
        // localStorage.removeItem('token');
        // dispatch(setLoading(false));
        navigate('/');
    }

    useEffect(() => {
        setLoggedInUser(data)
    }, [data])


    return (
        <div>
            <DashboardContainer>
                <LeftContainer>
                    <div
                        className="top_logo"
                        onClick={() => navigate("/")}
                    >
                        <img src={kde_whiteBg} alt="" />
                        <LogoText>
                            KING DAVID ELITE
                        </LogoText>

                    </div>

                    <div className="nav_items">
                        {
                            navigators.map((nav, i) => {
                                return (
                                    <div key={i} className={index === i + 1 ? " whitespace-nowrap bg-[#0D0D0D] text-white rounded-md h-[full] flex gap-2 items-center px-4 py-2 text-[15px]" : "item"} onClick={() => navigate(`/dashboard/${nav.link}`)}>
                                        <p>{nav.icon}</p>
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
                            <input type="text" placeholder='search ' />
                        </div>

                        <div className="profile" onClick={() => navigate("/profile")}>
                            <img src={userProfilePics} alt="" />

                            <div className="textContent">
                                <h6>{userfirstName?.toUpperCase()} {userLastName?.toUpperCase()}</h6>
                                <p>{data?.email}</p>
                            </div>

                            <MdArrowDropDown size={20} onClick={logOut} />
                        </div>
                    </div>



                    <div className="mainContent">
                        {element}
                    </div>

                </RightContainer>
            </DashboardContainer>

            {mobileElement}
        </div>

    )
}

export default Dashboard