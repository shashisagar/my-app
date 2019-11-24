import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './main';

import * as serviceWorker from './serviceWorker';

function AppTest() {
    return (
        <div>
            <Main />
        </div>
    );
}
ReactDOM.render(<AppTest />, document.getElementById('root'));
serviceWorker.unregister();
