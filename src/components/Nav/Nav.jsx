import React from 'react';
import { Link } from 'react-router-dom';
import localStyle from './nav.module.css'
function Nav() {
    return (
        <nav className='nav'>
            <div className={localStyle.container}>
                <div className={localStyle.list}>
                    <Link to='/profile' className={localStyle.link}>Profile</Link>
                    <Link to='/chats' className={localStyle.link}>Chats</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;