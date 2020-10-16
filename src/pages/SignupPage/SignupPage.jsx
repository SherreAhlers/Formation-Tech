import React, { Component } from 'react';
import userService from '../../utils/userService';
import './SignupPage.css';

class SignupPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: "",
      email: "",
      password: "",
      formation: "Anadarko",
      technologiesUsed: "",
      company: "",
      message: ""
    }
  };

  formRef = React.createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup({
        name: this.state.formData.name,
        email: this.state.formData.email,
        password: this.state.formData.password,
        formation: this.state.formData.formation,
        technologiesUsed: this.state.formData.technologiesUsed,
        company: this.state.formData.company
      });
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
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
        <h1>Sign Up</h1>
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="signup" id="signup-form">
          <div className="form-group">
            <label>Name (required)</label>
            <input
              className="form-control" id="name"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group" id="email">
            <label>Email (required)</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="name@example.com"
              value={this.state.formData.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group" id="password">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.formData.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group" id="formation">
            <label>Formation (required)</label>
            <select
              className="form-control"
              name="formation"
              value={this.state.formData.formation}
              onChange={this.handleChange}
              required>
              <option>Anadarko</option>
              <option>Appalachia</option>
              <option>Bakken</option>
              <option>Eagle Ford</option>
              <option>Haynesville</option>
              <option>Niobrara</option>
              <option>Permian</option>
            </select>
            </div>
            <div className="form-group" id="technologiesUsed">
            <label>Technologies Used (required)</label>
            <textarea
              className="form-control"
              name="technologiesUsed"
              value={this.state.formData.technologiesUsed}
              onChange={this.handleChange}
              required
            />
            </div>
            <div className="form-group" id="company">
            <label>Company</label>
            <input
              className="form-control"
              name="company"
              value={this.state.formData.company}
              onChange={this.handleChange}
              required
            />
            </div>
            <button
              className="btn"
              type="submit"
              disabled={this.state.invalidForm}>
            SIGN UP
            &nbsp;&nbsp;&nbsp;
            </button>
        </div>
        </form>
      </>
    );
  }
}

export default SignupPage;