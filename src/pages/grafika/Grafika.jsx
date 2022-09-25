import React from 'react'
import GrafikaCom from '../../components/grafikaCom/GrafikaCom';
import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import './grafika.css'

export const Grafika = () => {
  return (
    <div>
    <Header></Header>
    <div className='grafika'>
      <Navigation></Navigation>
      <GrafikaCom></GrafikaCom>
    </div>
</div>
  )
}
