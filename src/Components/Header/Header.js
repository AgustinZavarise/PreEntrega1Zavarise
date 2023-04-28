import React from 'react';
import "./Header.css";
import img from "./bannersinte.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
    
    	return (
            <div className='header'>

                
                <Link to='/'>
                    <img src={img} alt='logo' />
                </Link>
                
                
            </div>
        );
    
    
    
}

export default Header;
