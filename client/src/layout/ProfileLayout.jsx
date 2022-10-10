import './ProfileLayout.css'
import { MdEdit } from 'react-icons/md'
import { MdUpgrade } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { BadgeCheck } from 'heroicons-react'
import { useLocation, useNavigate } from 'react-router-dom'
import TopNavigationComponent from '../Components/topnav/TopNavigationComponent'
import Stat from '../Components/Stat/Stat'
import Verification from '../Components/Verification/Verification'

const ProfileLayout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const activeOption = location.pathname.split("/")[2] ?? "verification";
    console.log(activeOption);

    const navigateOptions = (activeOpt) => {
        // if (activeOpt === "stats") {
        //     navigate(`/profile`);
        // }
        // else if (activeOpt === "list") {
        //     navigate(`/profile/list`);
        // }
        // else if (activeOpt === "account") {
        //     navigate(`/profile/account`);
        // }
        // else {
        //     navigate(`/profile/verification`);
        // }
    }

    const navOptions = [
        {
            state: "stats",
            displayText: "Stats"
        },
        {
            state: "list",
            displayText: "List"
        },
        {
            state: "account",
            displayText: "Account"
        },
        {
            state: "verification",
            displayText: "Verification"
        },
    ]


    return (
        <div className='wrapper'>
            <div className='upper-div'></div>

            <div className='lower-div'>
                <div className='detail1'>
                    <div className='sub-detail1'>

                        <div className='slack'>
                            <div className='camera-div'> <BsCameraFill size={15} /></div>
                        </div>


                        <div className='detail-text'>
                            <div className='badge-div'>
                                <h3>KingDavid Team</h3>
                                <BadgeCheck className='badge' />
                            </div>
                            <p>Joined: 2022</p>
                        </div>

                        <button className='btn'><MdEdit size={15} className='icon' />Edit Profile</button>

                    </div>

                    <div className='sub-detail2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum im ut in quam et dis dui. Egestas egestas elementum proin purus. </p>
                    </div>

                    <button className='black-btn'><MdUpgrade size={18} className='upgrade-icon' />Upgrade Account</button>
                </div>

                <div className='detail2'>
                    <div className='border'></div>
                    <TopNavigationComponent navOptions={navOptions} activeOption={activeOption} setActiveOption={navigateOptions} />
                    <div className='border2'></div>
                    <div className="w-full h-full py-5 md:h-[90%] overflow-y-auto">
                        {
                            (activeOption == "stats") && <Stat />
                        }
                        {
                            (activeOption == "verification") && <Verification />
                        }
                    </div>

                </div>
            </div>
        </div >
    );
}

export default ProfileLayout;
