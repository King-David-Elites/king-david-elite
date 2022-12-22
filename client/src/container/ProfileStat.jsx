import React from 'react'
import block from "../Components/Home/images/block.png"
import { List, Overview, Post } from "./ProfileStat.style"
import { FaLongArrowAltUp, FaCalendarMinus, FaChevronDown } from 'react-icons/fa'
import S2 from "../Components/Home/images/S2.jpg"
import S1 from "../Components/Home/images/S1.jpg"
import { FaMapMarker } from "react-icons/fa"
import { FaHeart } from 'react-icons/fa'

export default function ProfileStat() {

  return (
    <List>
      {/* <Overview>
        <div className='account'>
          <p>Account Type : Free</p>
          <div className='overview-div'>
            <h3>Overview</h3>
            <img className='block' src={block} alt="blockPics" />
          </div>

          <div>
            <FaCalendarMinus className='minus_icon' />
            <input
             placeholder='Last 30 Days'
              />
            <FaChevronDown className='down_icon' />
          </div>
        </div>

        <div className='box'>
          <div className='page'>
            <h6>Page Views</h6>
            <div>
              <p><span>158</span>from 129</p>
              <div className='d'>
                <FaLongArrowAltUp
                  className='arrow'
                  color='#3EC73B' />
                <p>+22.5%</p>
              </div>
            </div>

          </div>

          <div className='page'>
            <h6>Listing Saves</h6>
            <div>
              <p><span>15</span>from 9</p>
              <div className='d'>
                <FaLongArrowAltUp
                  className='arrow'
                  color='#3EC73B' />
                <p>+22%</p>
              </div>
            </div>

          </div>

        </div>
      </Overview> */}
{/* <h3>Listings</h3> */}


      <p>Over view</p>
    </List>
  )
}
