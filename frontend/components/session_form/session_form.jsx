import React from 'react'

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

                    <label>Last Name:
                        <input type="text" value={this.state.lname} onChange={this.update('lname')}/>
                    </label>
                </>
            )
        }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                {this.props.formType} or {this.props.navLink} here
                {this.renderErrors()}
                <br/>
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <br/>

                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')}/>
                </label>
                <br/>
                {this.props.formType === 'signup' ? signupNames() : ''}
                <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default SessionForm