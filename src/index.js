import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe ,addPost} from './State/State';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
let mainRender = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
mainRender(state);
reportWebVitals();
subscribe(mainRender);
