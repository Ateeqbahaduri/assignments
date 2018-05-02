import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
       <div className="Navbar">
            <Link to="/newbear">Add Your Favorite Bear</Link>
            <Link to="/About"> About </Link>
            <Link to="/">Home</Link>
       </div>
    )
}
export default Navbar;