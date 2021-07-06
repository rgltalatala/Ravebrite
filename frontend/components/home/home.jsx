import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component{

    render(){
      const {currentUser, logout} = this.props

      const sessionLinks = () => (
        <>
          <nav className={"signin-container"}>
              {/* <Link to="/signup" className={"signup-login-link"}>Sign up!</Link>
              <div className={"logo"}> or </div>  */}
              <Link to="/login" className={"signup-login-link"}>log in here</Link>
          </nav>
        </>
      )

      const personalGreeting = () => ( // can have this render splash page component instead
          <>
            <hgroup >
              <h2 >Hello, {currentUser.email}!</h2>
              <button onClick={logout}>Log Out</button>
            </hgroup>
          </>
        );

        return(
          <>
            <h1>
              <Link to='/' className={"logo"} >
                ravebrite
              </Link>
            </h1>
            {currentUser ? personalGreeting() : sessionLinks()}
          </>
        ) 
    }

    

}

export default Home