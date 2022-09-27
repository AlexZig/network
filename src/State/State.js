import deletePostReducer from "./deletePost-reducer";
import newColorReducer from "./newColor-reducer";
import profileReducer from "./profile-reducer";
import massagesReducer from "./submitMassage-reducer";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let randomDecorColor1 = getRandomColor();
let randomDecorColor2 = getRandomColor();
let store = {
    _state: {
        chatsPage: {
            chats: [
                { id: 0, name: 'Alex' },
                { id: 1, name: 'Leonid' },
            ],
            massages: [
                { id: 0, massageText: 'ok' },
                { id: 1, massageText: 'no' },
                { id: 2, massageText: 'yes' }
            ]
        },
        profilePage: {
            posts: [
                { id: 0, text: 'Hello1' },
                { id: 1, text: 'Hello2' },
                { id: 2, text: 'Hello3' }
            ]
        },
        decorColor: {
            decorColor1: randomDecorColor1,
            decorColor2: randomDecorColor2,
            textColor: '#e6e6e6'
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
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().decorColor = newColorReducer(this.getState().decorColor, action);
        this.getState().chatsPage.massages = massagesReducer(this.getState().chatsPage.massages, action);
        this.getState().profilePage.posts = deletePostReducer(this.getState().profilePage.posts, action)
        this.mainRender(this.getState());
    },
}

export default store;
window.store = store;



