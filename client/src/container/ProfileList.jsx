import React from 'react'
import { LastContainer} from "./ProfileList.style"
import { FaFolderPlus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'


export default function ProfileList() {
  return (
    <LastContainer>
        <FaFolderPlus className='folder'/>
        <h3>No listings</h3>
        <p>Get started by creating a new listing</p>
        <button><FaPlus/>New listing</button>
    </LastContainer>
  )
}
