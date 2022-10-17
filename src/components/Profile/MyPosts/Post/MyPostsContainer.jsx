import React from 'react';
import { connect } from 'react-redux';
import { deletePostActionCreator } from '../../../../State/profile-reducer'
import { addPostActionCreator } from '../../../../State/profile-reducer';
import MyPosts from '../MyPosts';

let mapStateToProps = (state) => {
  debugger
  return {
    postsData: state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    },
    deletePost: (postId) => {
      dispatch(deletePostActionCreator(postId))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;