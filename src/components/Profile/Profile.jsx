import React from 'react';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import localStyle from './profile.module.css';
import ProfileSettings from './ProfileSettings/ProfileSettings';
function Profile(props) {
    return (
        <div className={localStyle.container}>
            <div className={localStyle.wall}>
                <ProfileSettings decorColor={props.decorColor} newColor={props.newColor} />
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;