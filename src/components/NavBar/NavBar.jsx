import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import SignUpPage from '../../pages/SignupPage/SignupPage';
// import LoginPage from '../../pages/LoginPage/LoginPage';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
      <div>
        {/* <LoginPage /> */}
        <SignUpPage />
      </div>
    </div>
    
  );
};

export default NavBar;