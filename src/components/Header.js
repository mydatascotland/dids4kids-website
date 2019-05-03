import React from 'react'
import logo from '../assets/images/mydatalogo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                  <span className="icon major"><img style={{width: "100px"}} src={logo} alt="" /></span>
                    <h1><strong>DID's 4 Kids</strong><br />
                    A MyData Scotland project</h1>
                    <p>Providing Decentralised Identifiers to Children.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Explore</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
