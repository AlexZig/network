const ADD_POST = 'ADD-POST';
const SUBMIT_MASSAGE = 'SUBMIT-MASSAGE';
let store = {
    _state: {
        chatsPage: {
            chats: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Leonid' },
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Leonid' },
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Leonid' },
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
        }else if(action.type === SUBMIT_MASSAGE) {
            debugger
            let newMassage = {
                id: 5,
                massage: action.massageText
            };
            this.getState().chatsPage.massages.unshift(newMassage);
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
export default store;
window.store = store;



