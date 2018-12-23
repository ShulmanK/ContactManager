import React, { Component } from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const selectedStyle = {
    background: "white",
    color: "slategray",
    width: "100px"
    }


export const MainMenu = () =>
    <nav className="main-menu nav flex-column">
        <NavLink to="/">
            <FaHome size="50px" />
        </NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>
            [About]
        </NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>
            [Events]
        </NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>
            [Products]
            </NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>
            [Contact Us]
            </NavLink>
    </nav>