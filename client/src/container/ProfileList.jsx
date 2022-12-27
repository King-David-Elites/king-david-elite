import React, { useEffect } from 'react'
import { LastContainer} from "./ProfileList.style"
import { FaFolderPlus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import globalApi from '../api'
import { setConfig } from '../infrastructure/api/user/userRequest'
import { GridContainer } from '../Components/Listing/Listing.styled'
import Listing from '../Components/Listing/Listing'
import { useState } from 'react'


export default function ProfileList() {
  const navigate = useNavigate()
  const [listings, setListings] = useState([])
  
  const getListings = ()=>{
    axios.get(`${globalApi}/listings/user-listing`, setConfig())
    .then(resp => setListings(resp.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getListings()
  }, [globalApi])

  return (
    <LastContainer>
        {/* <FaFolderPlus className='folder'/> */}
        {
          listings.length == 0 ?
          <>
            <h3>No listings</h3>
          <p>Get started by creating a new listing</p>
          </>
          :

          <p>Create a List</p>
        }
        
    
        <button
          onClick={()=>{
            navigate('/profile/create-listings')
          }}
        ><FaPlus/>New listing</button>

        
      <GridContainer>
          {
            listings.filter(i => !i.carCondition).map((items) => {
              return (
                // <RealEstate key={items._id} {...items} />
                <Listing key={items._id} list={items}/>
              )
            })
          }
  
        </GridContainer> 
    </LastContainer>
  )
}
