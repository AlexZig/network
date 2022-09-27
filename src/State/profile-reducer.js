const addPostActionType = 'ADD-POST';
const deletePostActionType = 'DELETE-POST';

let initialState = {
  posts: [
    { id: 0, text: 'Hello1' },
    { id: 1, text: 'Hello2' },
    { id: 2, text: 'Hello3' }
  ]
}
export const deletePostActionCreator = (postID) => {
  return {
    type: deletePostActionType,
    postID: postID
  }
}
export const addPostActionCreator = (postText) => {
  return {
    type: addPostActionType,
    postText: postText
  }
}

const profileReducer = (state = initialState, action) => {
  if (action.type === addPostActionType) {
    let newPost = {
      id: 0,
      text: action.postText
    };
    state.posts.unshift(newPost);
    for (let i = 0; i < state.posts.length; i++) {
      state.posts[i].id = i;
    }
  } else if (action.type === deletePostActionType) {
    let postNumber = action.postID;
    state.posts.splice(postNumber, 1);
    for (let i = 0; i < state.posts.length; i++) {
      state.posts[i].id = i;
    }
  }
  return state;
}

  
export default profileReducer;