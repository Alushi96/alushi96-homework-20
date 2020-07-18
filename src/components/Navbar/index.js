import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/">
                My Portfolio
            </Link>
            <div>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                    to="/"
                    className={
                        window.location.pathname === "/" || window.location.pathname === "/main"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    >
                    Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/projects"
                    className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                    >
                    Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/contact"
                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                    >
                    Contact
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;