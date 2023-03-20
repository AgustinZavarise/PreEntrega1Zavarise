import React from 'react';
import "./Header.css";
import img from "./bannersinte.jpg";

const Header = () => {
    return (
    <div className='Header'>
        <img src={img}alt= "logo" />
        <h3> Welcome to the shop!</h3>
        <h4>  SALE 15% off  </h4>
    </div>
    )
}

export default Header;