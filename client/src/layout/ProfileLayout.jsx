import './ProfileLayout.Style'
import TopNavigationComponent from '../Components/topnav/TopNavigationComponent'
import Verification from '../Components/Verification/Verification'
import Account from '../Components/Account/Account'
import bg from './Image/profilebg.png'
import check from "../Components/Home/images/check.png"
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthentication from '../application/hooks/useAuthentication'
import { useSelector } from 'react-redux'
import { TopContainer } from '../container/ProfileList.style'
import { MiddleContainer } from '../container/ProfileStat.style'
import ProfileStat from '../container/ProfileStat'
import ProfileList from '../container/ProfileList'
import { FaCamera, FaLongArrowAltUp, FaPen } from 'react-icons/fa'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const ProfileLayout = () => {
    const top = useRef(null)
    useAuthentication();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const userFirstName = user.firstName;
    const userLastName = user.lastName;
    const userProfilePic = user.profilePicture;
    const createdAt = user.createdAt;

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

    useEffect(()=>{
        scrollToRef(top)
    },[])

    return (
        <div>
            <TopContainer ref={top}>
                <div className='bg' style={{ backgroundImage: `url(${bg})` }}>
                </div>
                <div className='slac'>
                    <img className='B2' src={userProfilePic} alt="profilePics" />
                    <div className='camera'>
                        <FaCamera className='cam' />
                    </div>
                    <div className='team'>
                        <h3>{userFirstName} {userLastName}</h3>
                        <img className='check' src={check} alt="checkIcon" />
                        <p>Joined:  {new Date(createdAt).getFullYear().toString()}</p>
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
                    (activeComponent === "list") && <ProfileList/>
                }
                {
                    (activeComponent === "verification") && <Verification />
                }
                {
                    (activeComponent === "account") && <Account />
                }
            </div>
        </div>
    );
}

export default ProfileLayout;