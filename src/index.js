import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function AppTest() {
    return (
        <div>
            <App />
        </div>
    );
}
ReactDOM.render(<AppTest />, document.getElementById('root'));
serviceWorker.unregister();
