import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { signUp } from '../../actions/index'

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

  onSubmit = formValues => {
    this.props.signUp(formValues)
  }

  render() {
    const segment = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const signupGrid = {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }

    const message = {
      margin: 'auto',
      width: '50%'
    }

    return (
      <div className="ui middle aligned center aligned grid" style={{ paddingTop: '120px' }}>
        <div className="column">
          <h2 className="ui teal header">Sign-up for an account</h2>
          <div className="signup talbe">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui large form error" style={segment}>
              <div className="ui stacked segment" style={signupGrid}>
                <div className="ui field" style={{ width: '90%' }}>
                  <Field name="name" component={this.renderInput} label="Enter Username" />
                  <Field name="email" component={this.renderInput} label="Enter Email" />
                  <Field name="password" component={this.renderInput} label="Enter Password" />
                  <Field name="confirmedPassword" component={this.renderInput} label="Enter Confirmed Password" />
                </div>
                <button className="ui fluid large teal button" type="submit" style={{ width: '90%' }}>Submit</button>
              </div>
            </form>
          </div>
          <div className="column" style={{ marginTop: '20px' }}>
            <div className="ui message" style={message}>
              <span className="message" style={{ paddingRight: '5px' }}> Already have an account? </span>
              <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }


};

const validate = formValues => {
  const errors = {}
  if (!formValues.name) {
    errors.name = 'Please enter an username'
  }

  if (!formValues.email) {
    errors.email = 'Please enter an email'
  }

  if (!formValues.password) {
    errors.password = 'Please enter a password'
  }

  if (!formValues.confirmedPassword) {
    errors.confirmedPassword = 'Please enter a confirmed password'
  }

  return errors
}

const formWrapped = reduxForm({
  form: 'userSignup',
  validate: validate
})(UserSignup);


export default connect(null, { signUp })(formWrapped)
