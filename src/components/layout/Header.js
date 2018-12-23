import React, { Component } from "react";
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <ul className="navbar-nav">
          <li className="nav-item" style={{ color: 'white' }}>
            <Link className="nav-link" to="/" >
            <i className="fas fa-home"></i>
            Home
            </Link>
          </li>
          <li className="nav-item" style={{ color: 'white' }}>
            <Link className="nav-link" to="/aboutcontact">
            <i className="fas fa-question"></i>
            About</Link>
          </li>
          <li className="nav-item" style={{ color: 'white' }}>
            <Link className="nav-link" to="/contact/add">
            <i className="fas fa-plus"></i>
            Add Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "App"
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;