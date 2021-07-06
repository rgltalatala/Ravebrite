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
                    <label>First name:
                        <input type="text" value={this.state.fname} onChange={this.update('fname')}/>
                    </label>
                    <br/>

                    <label>Last name:
                        <input type="text" value={this.state.lname} onChange={this.update('lname')}/>
                    </label>
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
                {this.props.formType} or {this.props.navLink} here
                {this.renderErrors()}
                <br/>
                <label className={"emailLabel"}>Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <br/>

                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')}/>
                </label>
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