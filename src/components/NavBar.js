
import React from 'react';
import {Link}  from 'react-router-dom';

export default function NavBar(props) {
  
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.Mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.Mode === 'light'? 'dark': 'light'}`} to="/">{props.title} </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link text-${props.Mode === 'light'? 'dark': 'light'}`} aria-current="page" to="/">{props.index}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.Mode === 'light'? 'dark': 'light'}`} to="/About">{props.about}</Link>
        </li>
       
      </ul>
      <div className= "form-check form-switch text-light">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
  <label className="form-check-label" HTMLFor="flexSwitchCheckChecked"></label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
