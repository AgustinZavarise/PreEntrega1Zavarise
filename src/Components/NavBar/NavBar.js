import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";


const NavBar = () => {
    return (
    <nav className="Navigation"> 
        <ul className="List-ul">
            <li>
                <h1 style={{color: "white" }} > Sintetizadores online</h1>
                
            </li>
            <li>
                <a href="www.google.com"> Home</a>
            </li>
            <li>
                <a href="www.google.com"> Contacto</a>
            </li>
            <li>
                <a href="www.google.com"> Nosotros </a>
            </li>
            <li>
                <Shop />
            </li>

        </ul>    
    </nav>
    );
    
};

export default NavBar;