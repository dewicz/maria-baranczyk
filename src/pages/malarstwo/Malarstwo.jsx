import React from 'react'
import { Header } from '../../components/header/Header'
import MalarstwoCom from '../../components/malarstwoCom/MalarstwoCom'
import { Navigation } from '../../components/navigation/Navigation'
import './malarstwo.css'

const Malarstwo = () => {
  return (
    <div>
        <Header></Header>
        <div className='mal'>
          <Navigation></Navigation>
          <MalarstwoCom></MalarstwoCom>
        </div>
    </div>
  )
}

export default Malarstwo