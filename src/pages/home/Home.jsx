import React from 'react'
import { Header } from '../../components/header/Header'
import { Intro } from '../../components/intro/Intro'
import { Navigation } from '../../components/navigation/Navigation'
import './home.css'

export const Home = () => {
  return (
    <div>
        <Header></Header>
        <div className='intro'>
          <Navigation></Navigation>
          <Intro></Intro>
        </div>
    </div>
  )
}
