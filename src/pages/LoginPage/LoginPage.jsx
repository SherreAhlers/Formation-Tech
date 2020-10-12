import React, { Component } from 'react';
import './LoginPage.css';
import userService from '../../utils/userService';

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
      <h1>Log In</h1>
      <form
        ref={this.formRef}
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <div className="form-group">
          <label>Your email (required)</label>
          <input
            className="form-control"
            name="email"
            value={this.state.formData.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Your password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.formData.password}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={this.state.invalidForm}
        >
          LOG IN
        </button>
      </form>
    </>
    );
  }
}

export default LoginPage;