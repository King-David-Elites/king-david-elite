import React from 'react'
import theme from '../../application/utils/Theme'
import PhotoButton from '../buttons/PhotoButton'
import MainButton, { MainOutlineButton } from '../buttons/MainButton'
import VideoButton from '../buttons/VideoButton'

const HomePage = () => {
  return (
    <div>
    <MainButton>SIGN UP</MainButton>
    <MainOutlineButton>SIGN UP</MainOutlineButton>
    <PhotoButton>Photos</PhotoButton>
    <VideoButton>Video</VideoButton>
    <PhotoButton backgroundColor={theme.textColor} color={theme.color}>Photos</PhotoButton>
    <VideoButton backgroundColor={theme.textColor} color={theme.textColor}>Video</VideoButton>
    </div>
  )
}

export default HomePage