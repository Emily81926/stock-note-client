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

  onSubmit = async (formValues) => {
    await this.props.signIn(formValues)
    this.props.history.push('/')
  }

  SigninForm() {
    const segment = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const signinGrid = {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui large form error" style={segment}>
        <div className="ui stacked segment" style={signinGrid}>
          <div className="ui field" style={{ width: '90%' }}>
            <Field name="email" component={this.renderInput} label="Enter Email" />
            <Field name="password" component={this.renderInput} label="Enter Password" />
          </div>
          <button className="ui fluid large teal button" type="submit" style={{ width: '90%' }}>Submit</button>
          <div className="ui"> or </div>
          <GoogleAuth />
        </div>
      </form>
    )
  }

  render() {
    const message = {
      margin: 'auto',
      width: '50%'
    }
    return (
      <div className="ui middle aligned center aligned grid" style={{ paddingTop: '120px' }} >
        <div className="column">
          <h2 className="ui teal header">Log-in to your account</h2>
          <div className="signin table">
            {this.SigninForm()}
          </div>
          <div className="column" style={{ marginTop: '20px' }}>
            <div className="ui message" style={message}>
              <span className="message" style={{ paddingRight: '5px' }}> New to us? </span>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
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

const mapStateToProps = state => {
  console.log("local mapStateToProps", state.user)
  return { user: state.user }

}

export default connect(mapStateToProps, { signIn })(formWrapped)