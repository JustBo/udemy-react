import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  renderField(field) {
    console.log(field);
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div>
        New Post
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {

  const errors = {};

  //Validate the inputs from values
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories!";
  }
  if (!values.content) {
    errors.content = "Enter a content!";
  }
  //if errors is empty, the form is fine to submit

  //if errors has any properties, redux form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);
