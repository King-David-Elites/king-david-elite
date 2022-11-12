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
    // <LisXt>

    <LastContainer>
        <FaFolderPlus className='folder'/>
        <h3>No listings</h3>
        <p>Get started by creating a new listing</p>
        <button><FaPlus/>New listing</button>
    </LastContainer>


    
  )
}
