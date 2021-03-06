import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../EditTechnologyPage/EditTechnologyPage.css";

class EditTechnologyPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.technology,
  };

  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdateTechnology(this.state.formData);
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

  render() {
    return (
      <>
        <div class="card">
          <h1 class="edit-tech">Edit Technology</h1>
          <div className="edit" id="edit-form">
            <form
              ref={this.formRef}
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group" id="technology">
                <label>Technology Name (required)</label>
                <input
                  className="form-control"
                  name="name"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group" id="description">
                <label>Description (required)</label>
                <input
                  className="form-control"
                  name="description"
                  value={this.state.formData.description}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/* <div className="form-group" id="image">
            <label>Image</label>
            <input
              className="form-control"
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
              required
            />
          </div> */}{" "}
              {/* icebox item */}
              <div className="form-group" id="infoURL">
                <label>Information URL</label>
                <input
                  className="form-control"
                  name="infoURL"
                  value={this.state.formData.infoURL}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-xs"
                id="save-button"
                disabled={this.state.invalidForm}
              >
                SAVE TECHNOLOGY
              </button>
              &nbsp;&nbsp;
              <Link to="/">CANCEL</Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default EditTechnologyPage;
