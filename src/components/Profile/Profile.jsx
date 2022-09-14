import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import localStyle from './profile.module.css';
import ProfileSettings from './ProfileSettings/ProfileSettings';
function Profile(props) {
    return (
        <div className={localStyle.container}>
            <div className={localStyle.wall}>
                <ProfileSettings decorColor={props.decorColor} dispatch={props.dispatch} />
            </div>
            <MyPosts postsData={props.profileData.posts} dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;