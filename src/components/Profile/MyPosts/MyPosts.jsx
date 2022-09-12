import React from 'react';
import localStyle from './myPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator } from '../../../State/State';

function MyPosts(props) {
    let newPostText = React.createRef();
    
    let addPost = () => {
        let postText = newPostText.current.value;
        let action = addPostActionCreator(postText);
        if (postText !== '') {
            props.dispatch(action);
            newPostText.current.value = '';
        } else {
            alert('Введите текст поста');
            newPostText.current.blur();
        }
    }
    let addPostKey = (e) => {
        console.log(e)
        if (e.code === 'Enter' && !e.shiftKey) {
            let postText = newPostText.current.value;
            let action = addPostActionCreator(postText);
            if (postText !== '') {
                props.dispatch(action);
                newPostText.current.value = '';
                newPostText.current.blur();
            } else {
                alert('Введите текст поста');
                newPostText.current.blur();
            }
        } else if (e.code === 'Enter' && e.shiftKey) {
            newPostText.current.value = newPostText.current.value + '\ ';
            console.log(newPostText.current.value)
        }
    }
    return (
        <div className={localStyle.container}>
            <h3>My Posts</h3>
            <div className={localStyle.managment}>
                <textarea onKeyDown={addPostKey} ref={newPostText} placeholder='Your Post' ></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={localStyle.list}>
                {props.postsData.map(item => <Post id={item.id} text={item.text} />)}
            </div>
        </div>

    );
}

export default MyPosts;