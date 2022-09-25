import React from 'react'
import { Header } from '../../components/header/Header'
import InneCom from '../../components/inneCom/InneCom'
import { Navigation } from '../../components/navigation/Navigation'
import './inne.css'

const Inne = () => {
  return (
    <div>
        <Header></Header>
        <div className='inne'>
          <Navigation></Navigation>
          <InneCom></InneCom>
        </div>
    </div>
  )
}

export default Inne