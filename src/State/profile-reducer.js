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
  let stateCopy = {...state};
  if (action.type === addPostActionType) {
    let newPost = {
      id: 0,
      text: action.postText
    };
    // let stateCopy = {...state};
    stateCopy.posts = [...state.posts]
    stateCopy.posts.unshift(newPost);
    for (let i = 0; i < stateCopy.posts.length; i++) {
      stateCopy.posts[i].id = i;
    }
  } else if (action.type === deletePostActionType) {
    let postNumber = action.postID;
    // let stateCopy = {...state};
    stateCopy.posts = [...state.posts]
    stateCopy.posts.splice(postNumber, 1);
    for (let i = 0; i < stateCopy.posts.length; i++) {
      stateCopy.posts[i].id = i;
    }
  }
  return stateCopy;
}


export default profileReducer;
