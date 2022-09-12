import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../img/ava.jpg';
function ChatsItem(props) {
    return (
        <div>
            
            <Link to={'/chats/' + props.id}> <img src={img} />{props.name}</Link>
        </div>
    );
}

export default ChatsItem;