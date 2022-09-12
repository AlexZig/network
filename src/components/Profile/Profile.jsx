import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import localStyle from './profile.module.css';
function Profile(props) {
    return (
        <div className={localStyle.container}>
            <div className={localStyle.wall}>

            </div>
            <MyPosts postsData={props.profileData.posts} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;