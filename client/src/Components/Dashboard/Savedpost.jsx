import React from 'react'
import Dashboard from './Dashboard'
import { GenericContainer, Post} from './Savedpost.style'
import S2 from "../Home/images/S2.jpg"
import S1 from "../Home/images/S1.jpg"
import { FaMapMarker } from "react-icons/fa"
import { FaHeart } from 'react-icons/fa'



const WalletAsElement = ()=>{ 
    return(
        <GenericContainer>
          <h1>Saved Listings</h1>
          <Post>

            <div className='min-post'>
              <img className='S2' src={S2} alt="img"/>
              <p>King David Team</p>
            </div>

            <div className='Bg' style={{backgroundImage:`url(${S1})`}}>
              <div className='love'>
                <FaHeart
                color='rgba(255, 255, 255, 0.7)'
                />
                </div>   
              <button>View More</button>                         
            </div>
            <h4>$6,200,000</h4>
            <h5>Chrisol Square</h5>
            <div className='location'>
              <FaMapMarker/>
              <p>
                 Near Buckignham Palace, Carey street, London, United Kingdom.
              </p>
            </div>
            <button>
              Enquire Now
            </button>
            

          </Post>

          

        </GenericContainer>
    )
}

const Savedpost = () => {
  return (
    <Dashboard element={<WalletAsElement />} index="2" />
  )
}

export default Savedpost