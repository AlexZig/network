import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './State/redux-store'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
let mainRender = (state) => {//ГЛАВНАЯ ОТРИСОВКА ПРИНИМАЕТ ВСЕ ДАННЫЕ
    let body = document.querySelector('body');
    body.style.setProperty('--decorColor1', state.decorColor.decorColor1);
    body.style.setProperty('--decorColor2', state.decorColor.decorColor2);
    body.style.setProperty('--decorColorText', state.decorColor.textColor);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
mainRender(store.getState());
store.subscribe(() => {
    let state = store.getState();
    mainRender(state);
})
reportWebVitals();
