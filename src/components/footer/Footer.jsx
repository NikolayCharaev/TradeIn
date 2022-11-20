import React from 'react'
import Logo from '../logo/Logo'
import Nav from '../nav/Nav'
import CallNumbers from '../callNumbers/CallNumbers'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <Logo/>
                <Nav/>
                <CallNumbers/>
            </div>
        </div>
    </footer>
  )
}

export default Footer
