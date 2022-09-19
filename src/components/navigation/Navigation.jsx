import React from 'react'
import './navigation.css'

export const Navigation = () => {
  return (
    <div className="nav">
        <div className="name">
            <b>Maria Baranczyk</b>
        </div>
        <div className="navList">
            <div className="navItem">
                bio
            </div>
            <div className="navItem">
                grafika | graphic art
            </div>
            <div className="navItem">
                instalacja | installation
            </div>
            <div className="navItem">
                malarstwo | painting
            </div>
            <div className="navItem">
                inne | other
            </div>
        </div>
    </div>
  )
}
