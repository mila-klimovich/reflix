import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar_menu">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
            </div>
            <div className="navBar_logo">REFLIX</div>
        </div>
    );
}

export default NavBar;