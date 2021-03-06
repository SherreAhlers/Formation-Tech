import React, {Component} from 'react';
import '../AddCommentPage/AddCommentPage.css';

class AddCommentPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      comments: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddComment(this.state.formData, this.props.technology._id);
  };

  handleChange = e => {
    const formData = {...this.props.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  componentDidMount = () => {
  }

  render() {
    return (
      <>
      <h1>Add Comment</h1>
      <div className="add-comment" id="add-comment-form">
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group" id="add-content">
            <label>Comment</label>
            <textarea
              className="form-control"
              name="comments"
              type="text"
              value={this.state.formData.comments}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn"
            id="add-comment-button"
            disabled={this.state.invalidForm}
          >
            ADD COMMENT
          </button>
        </form>
        </div>
      </>
    );
  }
}

export default AddCommentPage;