import React, { Component } from 'react';
import './LoginPage.css';
import userService from '../../utils/userService';
import '../LoginPage/LoginPage.css';


class LoginPage extends Component {
  
  state = {
    invalidForm: true,
    formData: {
      email: '',
      password: '',
      message: ''
    },
  };

  formRef = React.createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state.formData);

      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.updateMessage(err.message)
    }
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <>
      <div className="login-form">
      <h1 className="login-title">Log In</h1>
      <form
        ref={this.formRef}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <div className="form-group" id="login-page-email">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            placeholder="name@example.com"
            value={this.state.formData.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group" id="login-page-password">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={this.state.formData.password}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          id="login-button"
          disabled={this.state.invalidForm}
        >
          LOG IN
        </button>
      </form>
      </div>
    </>
    );
  }
}

export default LoginPage;