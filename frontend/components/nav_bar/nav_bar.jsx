import React from 'react';
import { Link } from 'react-router-dom';


class navBar extends React.Component{
  constructor(props){
    super(props)

    // this.navBarToggle = this.navBarToggle.bind(this)
  }

  
  render(){
    

    const {currentUser, logout} = this.props

      const sessionLinks = () => (
        <>
          <div className="navBar">
              <Link to='/' className="logo" >
                ravebrite
              </Link>
              <Link to="/login" className="signup-login-link">Log in</Link>
          </div>
        </>
      )

      const personalGreeting = () => ( // can have this render splash page component instead
          <>
            <div className="navBar">
              <Link to='/' className={"logo"} >
                ravebrite
              </Link>

              {/* <div className="nav-search-bar-wrapper">
                <input type="text" className="nav-search-bar"/>
              </div> */}

              <div className="nav-bar-links">
                <Link to="/events/create" className="create link-button">
                  <i className="fas fa-plus-circle link-image"></i>
                  Create Event
                </Link>
                <Link to="/users/:userID/likes" className="link-button">
                  <i className="far fa-heart link-image"></i>
                  Likes
                </Link>
                <Link to={`/users/${currentUser.id}/registrations`} className="link-button">
                  <i className="fas fa-ticket-alt link-image"></i>
                  Tickets
                </Link>
                <div className="dropdown">
                  <a className="signup-login-link dropbtn">    {/* change this to Link when I create userShow --> */}
                    <i className="far fa-smile profilePic"></i> 
                    {currentUser.email}
                  </a>
                  <div className="dropdown-content">
                    <Link to={`/users/${currentUser.id}/events`}>
                      Manage my events
                    </Link>
                    <a onClick={logout}>Log Out</a>
                  </div>
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