import './ProfileLayout.Style'
import TopNavigationComponent from '../Components/topnav/TopNavigationComponent'
import Verification from '../Components/Verification/Verification'
import Account from '../Components/Account/Account'
import bg from './Image/profilebg.png'
import check from "../Components/Home/images/check.png"
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthentication from '../application/hooks/useAuthentication'
import { TopContainer } from '../container/ProfileList.style'
import { MiddleContainer } from '../container/ProfileStat.style'
import ProfileStat from '../container/ProfileStat'
import ProfileList from '../container/ProfileList'
import { FaCamera, FaLongArrowAltUp, FaPen } from 'react-icons/fa'
import { useGetUserDetails } from '../application/hooks/queryhooks'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const ProfileLayout = () => {
    const top = useRef(null)
    useAuthentication();
    const navigate = useNavigate();
    const { data } = useGetUserDetails();
    const [editUserProfile, setEditUserProfile] = useState([]);

    const navOptions = [
        {
            state: "stats",
            displayText: "Stats",
        },
        {
            state: "list",
            displayText: "List",
        },
        {
            state: "account",
            displayText: "Account",
        },
        {
            state: "verification",
            displayText: "Verification",
        },
    ]

    const [activeComponent, setActiveComponent] = useState(navOptions[0].state);

    const switchComp = (opt) => {
        setActiveComponent(opt);
    }

    useEffect(() => {
        setEditUserProfile(data)
    }, [data])

    useEffect(() => {
        scrollToRef(top)
    }, [])

    return (
        <div>
            {
                data !== null && <div>
                    <TopContainer ref={top}>
                        <div className='bg' style={{ backgroundImage: `url(${bg})` }}>
                        </div>
                        <div className='slac'>
                            <img className='B2' src={data?.profilePicture} alt="profilePics" />
                            <div className='camera'>
                                <FaCamera className='cam' />
                            </div>
                            <div className='team'>
                                <h3>{data?.firstName} {data?.lastName}</h3>
                                <img className='check' src={check} alt="checkIcon" />
                                <p>Joined:  {new Date(data?.createdAt).getFullYear().toString()}</p>
                            </div>

                            <div className='top_btn'>
                                <button className='edit_profile' onClick={() => navigate("/profile/edit")}>
                                    <FaPen className='pen' />
                                    Edit Profile
                                </button>
                                <button className='upgrade'><FaLongArrowAltUp />Upgrade Account</button>
                            </div>
                        </div>

                        <div className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae ducimus officia adipisci? Obcaecati aperiam, sapiente incidunt omnis mollitia in vel voluptate recusandae ipsam, odit ut similique eius quam doloremque!
                            Porro sint suscipit doloremque praesentium minus ipsum harum sequi voluptatibus quaerat, quibusdam, inventore repellat, eius enim quis quod perferendis animi maiores soluta necessitatibus eos ipsa! Ex temporibus vero cumque dolorum.
                            Ratione sapiente inventore esse doloribus.</div>
                    </TopContainer>

                    <MiddleContainer>
                        <div className='lines'></div>
                        <div className='middle_btn'>
                            <TopNavigationComponent navOptions={navOptions} activeComponent={activeComponent} setActiveComponent={switchComp} />
                        </div>
                        <div className='lines2'></div>
                    </MiddleContainer>

                    <div className=" h-full md:h-[90%] overflow-y-auto">
                        {
                            (activeComponent === "stats") && <ProfileStat />
                        }
                        {
                            (activeComponent === "list") && <ProfileList />
                        }
                        {
                            (activeComponent === "verification") && <Verification />
                        }
                        {
                            (activeComponent === "account") && <Account />
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default ProfileLayout;
