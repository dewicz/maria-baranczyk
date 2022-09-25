import React from 'react'
import { Header } from '../../components/header/Header'
import InstalacjaCom from '../../components/instalacjaCom/InstalacjaCom'
import { Navigation } from '../../components/navigation/Navigation'
import './instalacja.css'

const Instalacja = () => {
  return (
    <div>
        <Header></Header>
        <div className='inst'>
          <Navigation></Navigation>
          <InstalacjaCom></InstalacjaCom>
        </div>
    </div>
  )
}

export default Instalacja