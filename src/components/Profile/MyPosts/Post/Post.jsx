import React from 'react';
import localStyle from './post.module.css';
import img from '../../../../img/ava.jpg';
import { deletePostActionCreator } from '../../../../State/State';
function Post(props) {
    let post = React.createRef();
    let deletePost = () => {
        let postID = post.current.id;
        console.log(postID)
        let action = deletePostActionCreator(postID);
        props.dispatch(action);
    }
    return (
        <div className={localStyle.item} id={props.id} ref={post}>
            <img src={img} />
            <h3>Alex</h3>
            <p>{props.text}</p>
            <span onClick={deletePost}>×</span>
        </div>
    );
}

export default Post;