import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './State/State'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
let mainRender = (state) => {//ГЛАВНАЯ ОТРИСОВКА ПРИНИМАЕТ ВСЕ ДАННЫЕ
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
mainRender(store.getState());
reportWebVitals();
store.subscribe(mainRender);
