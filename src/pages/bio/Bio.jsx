import React from 'react'
import { About } from '../../components/about/About';
import { Header } from '../../components/header/Header';
import { Navigation } from '../../components/navigation/Navigation';
import './bio.css';

export const Bio = () => {
  return (
    <div>
        <Header></Header>
        <div className='about'>
          <Navigation></Navigation>
          <About></About>
        </div>
    </div>
  )
}
