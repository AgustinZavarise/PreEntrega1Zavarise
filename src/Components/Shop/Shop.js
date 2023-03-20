import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Shop = () => {
    return (
        <div style={{display:'flex'}}>
            <ShoppingCartIcon sx={{color: "#41e437ed"}}/>
            <span style={{color: "white"}}>2</span>
        </div>
    )
}

export default Shop