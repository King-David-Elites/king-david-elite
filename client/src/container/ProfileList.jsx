import React from 'react'
import { LastContainer} from "./ProfileList.style"
import { FaFolderPlus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


export default function ProfileList() {
  const navigate = useNavigate()
  return (
    <LastContainer>
        <FaFolderPlus className='folder'/>
        <h3>No listings</h3>
        <p>Get started by creating a new listing</p>
        <button
          onClick={()=>{
            navigate('/profile/create-listings')
          }}
        ><FaPlus/>New listing</button>
    </LastContainer>
  )
}
