import { link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav>
            <h2 className="logo">
                <Link className="logo-link" to="/">
                {props.title}
                </Link>{""}
            </h2>
            <ul className="nav-menu">
                <li>
                    <Link className="nav-menu_link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-menu_link" to="/actors">
                        Best Actors
                    </Link>
                </li>
                <li>
                    <Link className="nav-menu_link" to="/films">
                        Best Films
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

// import React from "react";

// const Navbar = () => (
//     <nav>
//         <h2 className="logo">
//             <a className="logo-link" href="#">This is a Blog Application</a>
//         </h2>
//         <ul className="nav-menu">
//             <li><a className="nav-menu-link" href="#">Home</a></li>
//             <li><a className="nav-menu-link" href="#">Actors</a></li>
//             <li><a className="nav-menu-link" href="#">Best Films</a></li>
//         </ul>
//     </nav>
// );

// export default Navbar;
