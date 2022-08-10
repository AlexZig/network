let State = {
    chatsPage: {
        chats: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Leonid' },
            { id: 3, name: 'Gosha' }
        ],
        massages: [
            { id: 1, massage: 'ok' },
            { id: 2, massage: 'no' },
            { id: 3, massage: 'yes' }
        ]
    },
    profilePage: {
        posts: [
            {id: 1, text: 'Hello'},
            {id: 1, text: 'Hello'},
            {id: 1, text: 'Hello'}
        ]
    }
}

export let addPost = (postText) =>{
    let newPost = {
        id: 5,
        text: postText
    };
    debugger;
    State.profilePage.posts.push(newPost);
    console.log(State.profilePage.posts)
}
export default State;