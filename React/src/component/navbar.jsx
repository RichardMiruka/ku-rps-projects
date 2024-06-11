import React from "react";

const Navbar = () => (
    <nav>
        <h2 className="logo">
            <a className="logo-link" href="#">This is a Blog Application</a>
        </h2>
        <ul className="nav-menu">
            <li><a className="nav-menu-link" href="#">Home</a></li>
            <li><a className="nav-menu-link" href="#">Actors</a></li>
            <li><a className="nav-menu-link" href="#">Best Films</a></li>
        </ul>
    </nav>
);

export default Navbar;
