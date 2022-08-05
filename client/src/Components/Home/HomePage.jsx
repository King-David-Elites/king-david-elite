import React, { Fragment } from 'react'
import theme from '../../application/utils/Theme'
import PhotoButton from '../buttons/PhotoButton'
import MainButton, { MainOutlineButton } from '../buttons/MainButton'
import VideoButton from '../buttons/VideoButton'
import Navbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import Category from './categories'
import Subfooter from './subfooter'
import Footer from '../Footer/Footer'
// import './style.css' 

const HomePage = () => {
  return (
    <Fragment>
      <Navbar/>
      <Category/>
      <Subfooter/>
      <Footer/>
    </Fragment>
    
  )
}

export default HomePage