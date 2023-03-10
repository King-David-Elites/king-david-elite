import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import globalApi from '../../api'
import { useGetUserDetails } from '../../application/hooks/queryhooks'
import { setConfig } from '../../infrastructure/api/user/userRequest'

const Conversation = ({conversationId}) => {
    const [message, setMessage] = useState({})
    const user = useGetUserDetails()
    const [toChat, setToChat] = useState({});

    const getUser = useCallback((toToCheck)=>{
        axios.get(`${globalApi}/users/${toToCheck}`, setConfig())
        .then(resp => {
            setToChat(resp.data)
        })
        .catch(err => console.log(err))
      }, [])

    const getAllMessages = useCallback(()=>{
        axios.get(`${globalApi}/messages/${conversationId}`, setConfig())
       .then(resp => {
           console.log(resp.data[resp.data.length - 1])
           setMessage(resp.data[resp.data.length - 1])
       })
       .catch(err => console.log(err))
   
       axios.get(`${globalApi}/conversations/${conversationId}`, setConfig())
       .then(resp => {
           const toChatId = resp.data.members.filter(id => id !== user._id)[0]
           getUser(toChatId)
       })
       .catch(err => console.log(err))
   
     }, [conversationId, getUser, user])

     useEffect(()=>{
        getAllMessages()
       }, [getAllMessages])

       const navigate = useNavigate()

  return (
    <Container onClick={()=> navigate(`/dashboard/messages/chat/${conversationId}`)}>
        <img src={toChat.profilePicture} alt="" />
        <div className="text">
            <h3>{toChat.firstName + " " + toChat.lastName}</h3>
            <p>{message.messageContent}</p>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
    gap: 10px;
    align-items: center;
    padding: 20px 10px;

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 50%;
    }

    .text{
        h3{
            font-weight: 600;
        }

        p{
            color: rgb(150,150, 150);
            font-size: 12px;
        }
    }
`

export default Conversation