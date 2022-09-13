import React from 'react';
import localStyle from './myPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator } from '../../../State/State';

function MyPosts(props) {
    let newPostText = '';
    let textarea;
    let textareafocus = (e) => {
        textarea = e.target;
    }
    let inputText = (e) => {
        textarea = e.target;
        newPostText = e.target.value;
    }
    
    let addPost = (e) => {
        let action = addPostActionCreator(newPostText);
        if (newPostText !== '') {
            props.dispatch(action);
            newPostText = '';
            textarea.value = '';
        } else {
            alert('Введите текст поста');
        }
        textarea.blur();
    }
    let addPostKey = (e) => {
        if (e.code === 'Enter' && !e.shiftKey) {
            let action = addPostActionCreator(newPostText);
            if (newPostText !== '') {
                props.dispatch(action);
                newPostText = '';
                textarea.value = '';
            } else {
                alert('Введите текст поста');
            }
            textarea.blur();
        } else if (e.code === 'Enter' && e.shiftKey) {
            newPostText = newPostText + '\ ';
        }
    }
    return (
        <div className={localStyle.container}>
            <h3>My Posts</h3>
            <div className={localStyle.managment}>
                <textarea onInput={inputText} onKeyDown={addPostKey} onFocus={textareafocus} placeholder='Your Post' ></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={localStyle.list}>
                {props.postsData.map(item => <Post id={item.id} text={item.text} dispatch={props.dispatch} />)}
            </div>
        </div>

    );
}

export default MyPosts;