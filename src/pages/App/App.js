import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
// named exports attached to TechnologyAPI
import * as technologyAPI from '../../utils/technologyService';
import AddTechnologyPage from '../AddTechnologyPage/AddTechnologyPage';
import EditTechnologyPage from '../EditTechnologyPage/EditTechnologyPage';
import TechnologyDetailPage from '../TechnologyDetailPage/TechnologyDetailPage';
//User sign in and login pages
import TechnologyListPage from '../TechnologyListPage/TechnologyListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import '../../utils/tokenService';
import '../../index.css'
import '../SignupPage/SignupPage.css'

class App extends Component {
    state = {
        technologies: [],
        user: userService.getUser()

    };

    /*--- Technology CRUD ---*/
    handleAddTechnology = async (newTechData) => {
      console.log("hitting handle add tech", newTechData)
        const newTech = await technologyAPI.create(newTechData);
        this.setState(
            (state) => ({
                technologies: [...state.technologies, newTech]
            }),
            () => this.props.history.push('/')
        );
    };

    handleUpdateTechnology = async (updatedTechData) => {
        const updatedTechnology = await technologyAPI.update(updatedTechData);
        // Using map to replace just the puppy that was updated
        const newTechnologiesArray = this.state.technologies.map((t) =>
          t._id === updatedTechnology._id ? updatedTechnology : t
        );
        this.setState(
          { technologies: newTechnologiesArray },
          // This cb function runs after state is updated
          () => this.props.history.push("/")
        );
      };
    
      handleDeleteTechnology = async (id) => {
        await technologyAPI.deleteOne(id);
        this.setState(
          (state) => ({
            // Yay, filter returns a NEW array
            technologies: state.technologies.filter((t) => t._id !== id),
          }),
          () => this.props.history.push("/")
        );
      };

    /*---- User Auth ---*/
    handleSignupOrLogin = () => {
        this.setState({
            user: userService.getUser(),
        });
        console.log(this.state.user);
        this.componentDidMount();
    };

    /*---- Lifecycle Methods ----*/
    async componentDidMount() {
      if (this.state.user) {
        const technologies = await technologyAPI.getAll();
        this.setState({ technologies });
        console.log("hitting the spot I just logged", technologies)
      }
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
        this.componentDidMount();
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
                    <NavLink exact to="/">
                        TECHNOLOGIES LIST
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <NavLink exact to="/add">
                        ADD TECHNOLOGY
                    </NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="" onClick = { this.handleLogout }>
                        LOG OUT 
                    </Link>  
                    &nbsp;&nbsp;&nbsp;
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
                <h2>Welcome, { this.state.user.name }</h2> : <h2>You are not logged in ! </h2>}  
                <Switch>
                <Route
              exact
              path="/"
              render={() => (
                <TechnologyListPage
                  user={this.state.user}
                  technologies={this.state.technologies}
                  handleDeleteTechnology={this.handleDeleteTechnology}
                />
              )}
            />
            <Route
              exact
              path="/add"
              render={() => (
                userService.getUser() ?
                <AddTechnologyPage handleAddTechnology={this.handleAddTechnology} />
                :
                <Redirect to="/login" />
              )}
            />
            <Route
              exact
              path="/details"
              render={({ location }) => 
              userService.getUser() ?
              <TechnologyDetailPage location={location} />
              :
                <Redirect to="/login" />
              }/>
            <Route
              exact
              path="/edit"
              render={({ location }) => (
                userService.getUser() ?
                <EditTechnologyPage
                  handleUpdateTechnology={this.handleUpdateTechnology}
                  location={location}
                /> :
                <Redirect to="/login" />
              )}
            />
                <Route exact path="/signup"
                render = {
                    ({ history }) => ( 
                        <SignupPage 
                        history={ history }
                        handleSignupOrLogin={ this.handleSignupOrLogin }
                        />
                    )
                }
                />  
                <Route exact path="/login"
                render = {
                    ({ history }) => ( 
                        <LoginPage 
                        history={ history }
                        handleSignupOrLogin={ this.handleSignupOrLogin }
                        />
                    )
                }
                />  
                </Switch> 
                <p className="landing-page" id="welcome">Welcome to Formation-Tech! This app is designed to help people looking for infomation about water technologies used in different formations around the U.S. Here you can post technologies you have used and read up on other technologies other people have used.</p>
                </main> 
                </div>
            );
        }
    }


    export default App;