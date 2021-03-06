import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../assets/images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'

class Navbar extends React.Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/praveenorugantitech-beach-resort-reactjs"><img src={logo} alt="Beach Resort"/></Link>
                        <button
                            onClick={this.handleToggle}
                            type="button"
                            className="nav-btn">
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/praveenorugantitech-beach-resort-reactjs" >Home</Link></li>
                        <li><Link to="/praveenorugantitech-beach-resort-reactjs/rooms" >Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
