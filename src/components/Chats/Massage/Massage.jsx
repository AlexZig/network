import React from 'react';
import localStyle from '../chats.module.css'
function Massage(props) {
    return ( 
        <div className={localStyle.massage_text}>{props.massage}</div>
     );
}

export default Massage;