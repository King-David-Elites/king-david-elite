import './ProfileLayout.Style'
import { MdEdit } from 'react-icons/md'
import { MdUpgrade } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { BadgeCheck } from 'heroicons-react'
import TopNavigationComponent from '../Components/topnav/TopNavigationComponent'
import Stat from '../Components/Stat/Stat'
import Verification from '../Components/Verification/Verification'
import Account from '../Components/Account/Account'
import { ProfileWrapper, UpperDiv, Slack } from './ProfileLayout.Style'
import bg from './Image/profilebg.png'
import slack from './Image/slack.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfileLayout = () => {

    const navigate = useNavigate();

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

    return (
        <ProfileWrapper>
            <UpperDiv imageUrl={bg}></UpperDiv>

            <div className='lower-div'>
                <div className='detail1'>
                    <div className='sub-detail1'>
                        <Slack>
                            <img src={slack} className='slack' alt='slack'></img>
                            <div className='camera-div'> <BsCameraFill size={15} /></div>
                        </Slack>

                        <div className='detail-text'>
                            <div className='badge-div'>
                                <h3>KingDavid Team</h3>
                                <BadgeCheck size={15} className='badge' />
                            </div>
                            <p>Joined: 2022</p>
                        </div>

                        <div className='btn-wrapper'>
                            <button className='btn' onClick={() => navigate("/profile/edit")}><MdEdit size={15} className='icon' />Edit Profile</button>
                            <button className='hide-btn'><MdUpgrade size={18} className='upgrade-icon' />Upgrade Account</button>
                        </div>


                    </div>

                    <div className='sub-detail2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum imperdiet sollicitudin porttitor. Eleifend nisi, mattis pulvinar sagittis at nisi aliquam metus. Ante accumsan vitae tristique at laoreet libero. Mauris tellus, nulla aliquam ut in quam et dis dui. Egestas egestas elementum proin purus.  </p>
                    </div>

                    <button className='black-btn'><MdUpgrade size={18} className='upgrade-icon' />Upgrade Account</button>
                </div>

                <div className='detail2'>
                    <div className='border'></div>
                    <TopNavigationComponent navOptions={navOptions} activeComponent={activeComponent} setActiveComponent={switchComp} />
                    <div className='border2'></div>
                    <div className="w-full h-full py-5 md:h-[90%] overflow-y-auto">
                        {
                            (activeComponent == "stats") && <p>Stat</p>
                        }
                        {
                            (activeComponent == "list") && <p>List</p>
                        }
                        {
                            (activeComponent == "verification") && <Verification />
                        }
                        {
                            (activeComponent == "account") && <Account />
                        }
                    </div>
                </div>
            </div>
        </ProfileWrapper  >
    );
}

export default ProfileLayout;
