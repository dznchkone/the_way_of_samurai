import React from 'react';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import 'normalize.css';
import './index.css';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(()=> {
    rerenderEntireTree();
});




