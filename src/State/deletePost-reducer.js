// const deletePostActionType = 'DELETE-POST';

// let initialState = {
//   posts: [
//     { id: 0, text: 'Hello1' },
//     { id: 1, text: 'Hello2' },
//     { id: 2, text: 'Hello3' }
//   ]
// }

// export const deletePostActionCreator = (postID) => {
//   return {
//     type: deletePostActionType,
//     postID: postID
//   }
// }

// const deletePostReducer = (posts = initialState, action) => {
//   if (action.type === deletePostActionType) {
//     let postNumber = action.postID;
//     posts.splice(postNumber, 1);
//     for (let i = 0; i < posts.length; i++) {
//       posts[i].id = i;
//     }
//   }
//   return posts;
// }
// export default deletePostReducer;