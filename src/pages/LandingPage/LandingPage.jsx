import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SignupForm from '../../components/SignupForm/SignupForm';



const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <NavBar
            user={props.user}
            handleLogout={props.handleLogout}
            />
            <SignupForm />
        </div>
    )
}

export default LandingPage;