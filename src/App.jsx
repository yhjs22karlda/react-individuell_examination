import { useState } from 'react'
import bitcoin_logo from './assets/bitcoin_logo.svg'
import ninja_logo from './assets/ninja_logo.svg'
import blockchain_logo from './assets/blockchain_logo.svg'
import evilcorp_logo from './assets/evilcorp_logo.svg'
import chip from './assets/chip.svg'
import wifi_logo from './assets/wifi_logo.svg'
import './App.css'

export default function App() {

  return (
    <div className="app">
      <img src={bitcoin_logo} />
      <img src={ninja_logo} />
      <img src={blockchain_logo} />
      <img src={evilcorp_logo} />
      <img src={chip} />
      <img src={wifi_logo} />
    </div>
  )
}

