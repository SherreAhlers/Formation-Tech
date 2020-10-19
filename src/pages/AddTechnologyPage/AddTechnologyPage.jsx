import React, {Component} from 'react';
import '../AddTechnologyPage/AddTechnologyPage.css';


class AddTechnologyPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      description: '',
      // image: '', icebox item
      infoURL: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTechnology(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
      <h1>Add Technology</h1>
      <div className="add" id="add-form">
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group" id="add-name">
            <label>Technology Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group" id="add-description">
            <label>Technology Description (required)</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* <div className="form-group" id="add-image">
            <label>Image</label>
            <input
              className="form-control"
              name="image"
              value={this.state.formData.image}
              onChange={this.handleChange}
            />
          </div> */} {/* icebox item */}
          <div className="form-group" id="add-url">
            <label>Resource URL</label>
            <input
              className="form-control"
              name="infoURL"
              value={this.state.formData.infoURL}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn"
            id="add-button"
            disabled={this.state.invalidForm}
          >
            ADD Technology
          </button>
        </form>
        </div>
      </>
    );
  }
}

export default AddTechnologyPage;