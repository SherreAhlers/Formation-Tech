import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';


class App extends Component {
    constructor() {
        super();
        this.state = {
            ...this.getInitialState(),
            user: userService.getUser()
        };
    }

    getInitialState() {
        return {
            users: ''
        };
    }

    /*---- Callback Methods  ---*/

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    /*---- Lifecycle Methods ----*/


    render() {
        return ( <
            div >
            <
            header className = "App-header" > Formation - Tech < /header>   <
            Switch >
            <
            NavBar / >
            <
            Route exact path = '/'
            render = {
                () =>
                <
                LandingPage
                user = { this.state.user }
                handleLogout = { this.handleLogout }
                />  
            }
            /> <
            Route exact path = '/signup'
            render = {
                ({ history }) =>
                <
                SignupPage
                history = { history }
                handleSignupOrLogin = { this.handleSignupOrLogin }
                />
            }
            /> <
            Route exact path = '/login'
            render = {
                ({ history }) =>
                <
                LoginPage
                handleSignupOrLogin = { this.handleSignupOrLogin }
                history = { history }
                />
            }
            /> < /
            Switch > <
            /div>
        );
    }
}

export default App;