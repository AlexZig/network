import React from 'react';
import { Link } from 'react-router-dom';
function ChatsItem(props) {
    return (
        <div>
            <Link to={'/chats/' + props.id}>{props.name}</Link>
        </div>
    );
}

export default ChatsItem;