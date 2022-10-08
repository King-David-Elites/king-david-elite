import style from './ProfileLayout.css'
import { MdEdit } from 'react-icons/md'
import { MdUpgrade } from 'react-icons/md'
import { BsCameraFill } from 'react-icons/bs'
import { BadgeCheck } from 'heroicons-react'

const ProfileLayout = () => {
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

                    <div className='border'></div>
                </div>
            </div>
        </div >
    );
}

export default ProfileLayout;
