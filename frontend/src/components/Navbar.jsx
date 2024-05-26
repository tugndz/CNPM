import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ containerStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            <NavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : ""}>Trang chủ</NavLink>
            <NavLink to={'/clothing'} className={({ isActive }) => isActive ? "active-link" : ""}>Iphone</NavLink>
            <NavLink to={'/cosmetics'} className={({ isActive }) => isActive ? "active-link" : ""}>SamSung</NavLink>
            <NavLink to={'/electronics'} className={({ isActive }) => isActive ? "active-link" : ""}>Xiaome</NavLink>
        </nav>
    )
}

export default Navbar