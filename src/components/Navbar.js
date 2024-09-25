import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-3" onClick={()=>{props.toggleMode('primary')}} style={{height: '25px', width: '25px'}}></div>
        <div className="bg-success rounded mx-3" onClick={()=>{props.toggleMode('success')}} style={{height: '25px', width: '25px'}}></div>
        <div className="bg-danger rounded mx-3"  onClick={()=>{props.toggleMode('danger')}} style={{height: '25px', width: '25px'}}></div>
        <div className="bg-warning rounded mx-3" onClick={()=>{props.toggleMode('warning')}} style={{height: '25px', width: '25px'}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      </div>
    </div>
  </nav>
  )
}

// {Defining datatypes of the propTypes}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// {Setting by deafult prop values}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About Us'
};