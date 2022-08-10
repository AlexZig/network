import React from 'react';
import localStyle from './post.module.css';
import img from '../../../../img/ava.jpg';
function Post(props) {
    return (
        <div className={localStyle.item}>
            <img src={img} />
            <h3>Alex</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Post;