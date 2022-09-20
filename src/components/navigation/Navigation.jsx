import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './navigation.css'

export const Navigation = () => {
  return (
    <div className="nav">
        <div className="name">
            <NavLink to="/" style={{color: "inherit", textDecoration:"none"}}>
                <b>Maria Baranczyk</b>
            </NavLink>
        </div>
        <div className="navList">
            <NavLink to="/bio" >
                <span>bio</span>
            </NavLink>
            <NavLink to="/grafika">
                <span>grafika | graphic art</span>
            </NavLink>
            <NavLink to="/instalacja">
                <span>instalacja | installation</span>
            </NavLink>
            <NavLink to="/malarstwo">
                <span>malarstwo | painting</span>
            </NavLink>
            <NavLink to="/inne">
                <span>inne | other</span>
            </NavLink>
        </div>
    </div>
  )
}
