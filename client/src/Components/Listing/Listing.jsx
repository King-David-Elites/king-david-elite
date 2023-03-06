import { Heart, HeartOutline, LocationMarker } from 'heroicons-react'
import React from 'react'
import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Container } from './Listing.styled'

const Listing = ({ list, type }) => {
  const [loved, setLoved] = useState(false);

  const truncate = (text, txtLimit) => {
    let limit = txtLimit || 30
    if (text.length > limit) {
      return text.substring(0, limit) + "..."
    }
    else {
      return text
    }
  }

  const navigate = useNavigate()

  const redirect = (id) => {
    navigate(id)
  }
  return (
    <Container>
      <div className="profile">
        <img src={list.postedBy.profilePicture} alt="" />
        <h4>{list.postedBy.firstName + " " + list.postedBy.lastName}</h4>
        <FaCheckCircle />
      </div>
      <div className="image">
        <img src={list.images[0]} alt="" className='relative' />
        <div
          onClick={() => {
            setLoved(!loved);
          }}
          className='absolute top-3 left-3 bg-[#ffffff33] rounded-full p-2'
        >
          {loved ? (
            <Heart color="#FFDF00" />
          ) : (
            <HeartOutline color="yellow" />
          )}
        </div>
        <div className="view" onClick={() => { redirect(list._id) }}>
          Read More
        </div>
      </div>

      <p className="title">
        {
          list.title
        }
      </p>
      <p className="price">
        ${list.price}
      </p>

      <p className="description">
        {/* {
          truncate(list.description, 50)
        } */}
        <LocationMarker /> {list.location}
      </p>

      <div className="enquireNow">
        Enquire Now
      </div>
    </Container>
  )
}

export default Listing