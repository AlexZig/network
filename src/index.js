import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './State/redux-store'
import './index.css'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
let body = document.querySelector('body');
body.style.setProperty('--decorColor1', store.getState().decorColor.decorColor1);
body.style.setProperty('--decorColor2', store.getState().decorColor.decorColor2);
body.style.setProperty('--decorColorText', store.getState().decorColor.textColor);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// let mainRender = (state) => {//ГЛАВНАЯ ОТРИСОВКА ПРИНИМАЕТ ВСЕ ДАННЫЕ
    
// }
// mainRender(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     mainRender(state);
// })
// 
