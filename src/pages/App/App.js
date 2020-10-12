import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import '../../index.css'
import '../SignupPage/SignupPage.css'

class App extends Component {
    state = {
        user: userService.getUser()

    };

    /*---- User Auth ---*/
    handleSignupOrLogin = () => {
        this.setState({
            user: userService.getUser(),
        });
        console.log(this.state.user);
    };

    /*---- Lifecycle Methods ----*/
    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    };

    /*---- Callback Methods  ---*/


    render() {
        return ( 
            <div className="App">
            <header className="App-header">
            Formation-Tech 
            <nav> 
                {this.state.user ? ( 
                    <>
                    <Link to="" onClick = { this.handleLogout }>
                    LOG OUT 
                    </Link>  
                    </>
                ) : ( 
                    <>
                    <NavLink exact to="/login">
                    LOG IN 
                    </NavLink>  
                    &nbsp;&nbsp;&nbsp; 
                    <NavLink exact to="/signup">
                    SIGN UP 
                    </NavLink>  
                    </>
                )
            } 
            </nav>  
            </header> 
            <main> 
                {this.state.user ?
                <h2>Welcome, { this.state.user.name }</h2> 
                :  
                <h2>You are not logged in ! </h2>
                }  
                <Switch>
                <Route exact path="/signup"
                render = {
                    ({ history }) => ( 
                        <SignupPage history={ history }
                        handleSignupOrLogin={ this.handleSignupOrLogin }
                        />
                    )
                }
                />  
                <Route exact path="/login"
                render = {
                    ({ history }) => ( 
                        <LoginPage history={ history }
                        handleSignupOrLogin={ this.handleSignupOrLogin }
                        />
                    )
                }
                />  
                </Switch> 
                </main>  
                </div>
            );
        }
    }


    export default App;