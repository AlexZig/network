import React from 'react';
import localStyle from './post.module.css'
function Post(props) {
    return ( 
        <div className={localStyle.post}>
            <p>{props.text}</p>
        </div>
     );
}

export default Post;