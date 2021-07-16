import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="footer">
                <Link to='https://www.linkedin.com/in/raphael-talatala-703943129/' >
                    <i class="fab fa-linkedin-in footer-logo" ></i>
                </Link>
                <Link to='https://github.com/rgltalatala' >
                    <i class="fab fa-github footer-logo"></i>
                </Link>
            </div>
        </div>
    )
}