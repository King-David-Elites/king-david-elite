import React from 'react'
import B1 from "../Components/Home/images/B1.jpg"
import B2 from "../Components/Home/images/B2.jpg"
import check from "../Components/Home/images/check.png"
import { List } from "./ProfileList.style"
import { MiddleContainer, LastContainer, TopContainer} from "./ProfileList.style"
import { FaFolderPlus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'
import { FaLongArrowAltUp } from 'react-icons/fa'



export default function ProfileList() {
  return (
<<<<<<< HEAD
    <List>

      {/* <TopContainer>
         <div className='bg' style={{backgroundImage:`url(${B1})`}}>
         </div>
        <div className='slac'>
            <img className='B2' src={B2}/>
            <div className='camera'>
              <FaCamera className='cam'/>
            </div>
            <div className='team'>
                 <h3>King David Team</h3>
                 <img className='check' src={check}/>
                 <p>Joined: 2022</p>
            </div>

            <div className='top_btn'>
                <button className='edit_profile'>
                  <FaPen className='pen'/>
                  Edit Profile
                </button>
                <button className='upgrade'
                ><FaLongArrowAltUp
                className='arrow '
                />Upgrade Account</button>
            </div>
        </div>

        <div className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tempor mattis turpis egestas quam cursus sit lobortis. Quam cursus bibendum imperdiet sollicitudin porttitor. Eleifend nisi, mattis pulvinar sagittis at nisi aliquam metus. Ante accumsan vitae tristique at laoreet libero. Mauris tellus, nulla aliquam ut in quam et dis dui. Egestas egestas elementum proin purus.</div>
       </TopContainer>

    <MiddleContainer>
        <div className='lines'></div>
        <div className='middle_btn'>
            <button className='stat'>Stats</button>
            <button className='list'>Lists</button>
            <button>Account</button>
            <button>Verification</button>
        </div>
        <div className='lines2'></div>
    </MiddleContainer> */}
=======
    // <LisXt>
>>>>>>> be2ed1713d0e943d7b37bd2286079a88ce311f30

    <LastContainer>
        <FaFolderPlus className='folder'/>
        <h3>No listings</h3>
        <p>Get started by creating a new listing</p>
        <button><FaPlus/>New listing</button>
    </LastContainer>


    
  )
}
