const ADD_POST = 'ADD-POST';
const SUBMIT_MASSAGE = 'SUBMIT-MASSAGE';
const DELETE_POST = 'DELETE-POST';
let store = {
    _state: {
        chatsPage: {
            chats: [
                { id: 0, name: 'Alex' },
                { id: 1, name: 'Leonid' },
            ],
            massages: [
                { id: 0, massage: 'ok' },
                { id: 1, massage: 'no' },
                { id: 2, massage: 'yes' }
            ]
        },
        profilePage: {
            posts: [
                { id: 0, text: 'Hello1' },
                { id: 1, text: 'Hello2' },
                { id: 2, text: 'Hello3' }
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
                id: 0,
                text: action.postText
            };
            this.getState().profilePage.posts.unshift(newPost);
            for (let i = 0; i < this.getState().profilePage.posts.length; i++) {
                this.getState().profilePage.posts[i].id = i;
            }

        } else if (action.type === SUBMIT_MASSAGE) {
            let newMassage = {
                id: this.getState().chatsPage.massages.length,
                massage: action.massageText
            };
            this.getState().chatsPage.massages.push(newMassage);

        } else if (action.type === DELETE_POST) {
            let postNumber = action.postID;
            this.getState().profilePage.posts.splice(postNumber, 1);
            for (let i = 0; i < this.getState().profilePage.posts.length; i++) {
                this.getState().profilePage.posts[i].id = i;
            }
        }
        this.mainRender(this.getState());
    },
}
export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText: postText
    }
}
export const submitMassageActionCreator = (massageText) => {
    return {
        type: SUBMIT_MASSAGE,
        massageText: massageText
    }
}
export const deletePostActionCreator = (postID) => {
    return {
        type: DELETE_POST,
        postID: postID
    }
}
export default store;
window.store = store;



