import React from 'react'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'; 


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
                <br/>
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
                </form>
                {splitRight()}
            </div>
        )
    }
}

export default SessionForm