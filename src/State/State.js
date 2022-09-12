const ADD_POST = 'ADD-POST';
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
        return (
            this._state
        )
    },
    mainRender() { },
    subscribe(observer) {
        this.mainRender = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: action.postText
            };
            this.getState().profilePage.posts.unshift(newPost);
            this.mainRender(this.getState());
        }
    },
}
export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText: postText
    }
}
export default store;
window.store = store;



