import React from 'react';
import localStyle from './myPosts.module.css'
import Post from './Post/Post';
function MyPosts(props) {
    return (
        <div className={localStyle.myPosts__list}>
            {props.postsData.map(item => <Post id={item.id} text={item.text} />)}
        </div>
    );
}

export default MyPosts;