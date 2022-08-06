import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";
import { signIn } from '../../actions/index'

class UserSignin extends React.Component {
 
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
  onSubmit = formValues => {
    this.props.signIn(formValues)
    //看看有沒有真的把form的value傳過去
    console.log(formValues)
  }

  SigninForm() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
        <Field name="email" component={this.renderInput} label="Enter Email" />
        <Field name="password" component={this.renderInput} label="Enter Password" />
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }

  render() {
    return (
      <div className="ui">
        <Link to="/" className="button">
        </Link>
        <div className="signin table">
          {this.SigninForm()}
        </div>
        <GoogleAuth />
      </div>
    )
  }
};

const validate = formValues => {
  const errors = {}

  if (!formValues.email) {
    errors.email = 'Please enter an email'
  }

  if (!formValues.password) {
    errors.password = 'Please enter a password'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'userSignin',
  validate: validate
})(UserSignin);

export default connect(null, { signIn })(formWrapped)