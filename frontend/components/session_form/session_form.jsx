import React from 'react'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'; 
import { login } from '../../actions/session_actions';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          fname: "",
          lname: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }

    demoUserSignin(demoUser) {
      return e => {
        e.preventDefault();
        this.props.processForm(demoUser)
        this.props.history.push(`/`)
      }
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm(this.state).then(() => {
            this.setState({
                email: '',
                password: '',
                fname: "",
                lname: ""
            })
            this.props.history.push(`/`) // only do this on a successful login / sign up
        })
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    

    render(){
      const demoUser = {
        email: "demo@user.com",
        password: "demouser"
      }
      
      
      const signupNames = () => {
        return(
          <>
                <div className={"inputGroup"}>
                  <input 
                    type="text" 
                    value={this.state.fname} 
                    onChange={this.update('fname')}
                    className={"formInput"}
                    />
                  <label className={"formInputLabel"}>First name:</label>
                </div>
                <br/>

                <div className={"inputGroup"}>
                  <input 
                    type="text" 
                    value={this.state.lname} 
                    onChange={this.update('lname')}
                    className={"formInput"}
                    />
                  <label className={"formInputLabel"}>Last name:</label>
                </div>
                <br/>
              </>
          )
        }
        
      const splitRight = () => {
          return(
            <>
              <div className="split right">
                <div className="centered">
                  <p>

                  </p>
                </div>
              </div>
          </>
        )
      }

      return(
          <div className={"split left container"}>
              <h1>
                  <Link to='/' className={"logo"} >
                      ravebrite
                  </Link>
              </h1>
              <form onSubmit={this.handleSubmit} className={"centered"}>
                {this.props.formType} or {this.props.navLink}
                {this.renderErrors()}
                <div className={"inputGroup"}>
                    <input 
                      type="text" 
                      value={this.state.email} 
                      onChange={this.update('email')}
                      className={"formInput"}
                    />
                    <label className={"formInputLabel"}>Email:</label>
                </div>
                <br/>

                <div className={"inputGroup"}>
                    <input 
                      type="password" 
                      value={this.state.password} 
                      onChange={this.update('password')}
                      className={"formInput"}
                    />
                    <label className={"formInputLabel"}>Password:</label>
                </div>
                <br/>
                {this.props.formType === 'Sign up' ? signupNames() : ''}
                <input className="formButton" type="submit" value={this.props.formType}/>
                <br />
                {this.props.formType === 'Log in' ? 
                  <button 
                    onClick={this.demoUserSignin(demoUser)}
                    className={"split left container inputGroup formButton"}  
                  >Demo User</button>
                : ''}
                
              </form>
              {splitRight()}
          </div>
      )
    }
}

export default SessionForm

// don't make ali mad w css design choices or else