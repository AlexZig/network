import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className="nav">
            <Link to='/profile'>Profile</Link>
            <Link to='/chats'>Chats</Link>
        </div>
    );
}

export default Nav;