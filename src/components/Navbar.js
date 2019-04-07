import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h3 className="navbar__title">NarutoQuotes</h3>
                <ul className="navbar__ul">
                    <li className="ul__li"><Link to='/'> Home</Link></li>
                    <li className="ul__li"><Link to='/quoteslist'>QuotesList</Link></li>
                </ul>
            </nav>

        );
    };
}
        
export default Navbar;