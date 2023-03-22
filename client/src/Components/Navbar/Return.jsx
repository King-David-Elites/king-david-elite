import { ChevronLeft } from 'heroicons-react'
import React from 'react'
import { FaArrowLeft, FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ReturnContainer } from './Navbar.Style'

const Return = ({transparent}) => {
    const navigate = useNavigate()

  return (
    <ReturnContainer transparent={transparent}>
        <div className="icon" onClick={()=> window.history.back()}>
            <ChevronLeft width={20} color={"black"}/>
        </div>
    </ReturnContainer>
  )
}

export default Return