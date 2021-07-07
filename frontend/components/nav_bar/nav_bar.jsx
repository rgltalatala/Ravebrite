import React from 'react';
import { Link } from 'react-router-dom';


class navBar extends React.Component{

    render(){
      const {currentUser, logout} = this.props

      const sessionLinks = () => (
        <>
          <div className="navBar">
              <Link to='/' className="logo" >
                ravebrite
              </Link>
              <Link to="/login" className="signup-login-link">log in</Link>
          </div>
        </>
      )

      const personalGreeting = () => ( // can have this render splash page component instead
          <>
            <div className="navBar">
              <Link to='/' className={"logo"} >
                ravebrite
              </Link>
              <div className="dropdown">
                
                 <a className="signup-login-link dropbtn">    {/* change this to Link when I create userShow --> */}
                  <i className="far fa-smile profilePic"></i> 
                  {currentUser.email}
                </a>
                <div className="dropdown-content">
                  <a>Link 1</a>
                  <a>Link 2</a>
                  <a onClick={logout}>Log Out</a>
                </div>
              </div>
            </div>
          </>
        );

        return(
          <>
            {currentUser ? personalGreeting() : sessionLinks()}
          </>
        ) 
    }

    

}

export default navBar