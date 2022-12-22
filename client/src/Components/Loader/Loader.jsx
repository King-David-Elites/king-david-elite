import React from 'react'
import { Container } from './Loader.style'


export default function Loader() {
  return (
    <Container>
        <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Container>
  )
}
