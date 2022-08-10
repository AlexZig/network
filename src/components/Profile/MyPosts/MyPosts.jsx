import React from 'react';
import localStyle from './myPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {
    let newPostText = React.createRef();
    let addPost = () => {
        debugger
        let postText = newPostText.current.value;
        props.addPost(postText);
        newPostText.current.value = '';
    }
    return (
        <div className={localStyle.container}>
            <h3>My Posts</h3>
            <div className={localStyle.managment}>
                <textarea ref={newPostText} placeholder='Your Post' ></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={localStyle.list}>
                {props.postsData.map(item => <Post id={item.id} text={item.text} />)}
            </div>
        </div>

    );
}

export default MyPosts;