import React from 'react';
import localStyle from './myPosts.module.css'
import Post from './Post/Post';


function MyPosts(props) {
    let textarea;
    let textareafocus = (e) => {
        textarea = e.target;
    }
 
    
    let addPost = (e) => {
        if (textarea.value !== '') {
            props.addPost(textarea.value);
            textarea.value = '';
        } else {
            alert('Введите текст поста');
        }
        textarea.blur();
    }
    let addPostKey = (e) => {
        if (e.code === 'Enter' && !e.shiftKey) {
            if (textarea.value !== '') {
                props.addPost(textarea.value);
                textarea.value = '';
            } else {
                alert('Введите текст поста');
            }
            textarea.blur();
        }
    }
    return (
        <div className={localStyle.container}>
            <h3>My Posts</h3>
            <div className={localStyle.managment}>
                <textarea onKeyDown={addPostKey} onFocus={textareafocus} placeholder='Your Post' ></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={localStyle.list}>
                {props.postsData.map(item => <Post id={item.id} text={item.text} deletePost={props.deletePost} />)}
            </div>
        </div>

    );
}

export default MyPosts;