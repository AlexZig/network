import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import localStyle from './profile.module.css'
function Profile(props) {
    return ( 
        <div className="profile">
            <MyPosts  postsData={props.profileData.posts}/>
        </div>
     );
}

export default Profile;