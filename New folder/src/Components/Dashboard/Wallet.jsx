import React from 'react'
import Dashboard from './Dashboard'
import { GenericContainer } from './Dashboard.Styles'

const WalletAsElement = ()=>{
    return(
        <GenericContainer>

        </GenericContainer>
    )
}

const Wallet = () => {
  return (
    <Dashboard element={<WalletAsElement />} index="2" />
  )
}

export default Wallet