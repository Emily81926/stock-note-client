import React from "react";
import { Field, reduxForm } from 'redux-form'

class UserSignup extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type="text" autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
        <Field name="username" component={this.renderInput} label="Enter Username" />
        <Field name="email" component={this.renderInput} label="Enter Email" />
        <Field name="password" component={this.renderInput} label="Enter Password" />
        <Field name="confirmedPassword" component={this.renderInput} label="Enter Confirmed Password" />
        <button className="ui button" type="submit">Submit</button>
      </form>
    );
  }


};

const validate = formValues => {
  const errors = {}
  if (!formValues.username) {
    errors.username = 'Please enter a username'
  }

  if (!formValues.email) {
    errors.email = 'Please enter an email'
  }

  if (!formValues.password) {
    errors.password = 'Please enter a password'
  }

  if (!formValues.confirmedPassword) {
    errors.confirmedPassword = 'Please enter a confirmed password'

    return errors
  }
}

export default reduxForm({
  form: 'userSignup',
  validate: validate
})(UserSignup);