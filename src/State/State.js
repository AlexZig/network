let store = {
    _state: {
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
                { id: 1, text: 'Hello' },
                { id: 1, text: 'Hello' },
                { id: 1, text: 'Hello' }
            ]
        }
    },
    getState() {
        return(
            this._state
        )
    },
    mainRender() { },
    addPost(postText) {
        let newPost = {
            id: 5,
            text: postText
        };
        this._state.profilePage.posts.push(newPost);
        debugger
        this.mainRender(this._state);
    },
    subscribe(observer) {
        this.mainRender = observer;
    }
}
export default store;
window.store = store;
// export let addPost = (postText) => {
//     let newPost = {
//         id: 5,
//         text: postText
//     };
//     State.profilePage.posts.push(newPost);
//     debugger
//     mainRender(State);
// }

// export const subscribe = (observer) => {
//     mainRender = observer;
// };


