import React from 'react';
import localStyle from './post.module.css';
import img from '../../../../img/ava.jpg';
import { deletePostActionCreator } from '../../../../State/profile-reducer';

function Post(props) {
    let deletePost = (e) => {
        let postID = e.target.parentNode.id;
        let action = deletePostActionCreator(postID);
        props.dispatch(action);
    }
    return (
        <div className={localStyle.item} id={props.id}>
            <img src={img} />
            <h3>Alex</h3>
            <p>{props.text}</p>
            <span onClick={deletePost}>×</span>
        </div>
    );
}

export default Post;