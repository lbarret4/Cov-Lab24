import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const chirps=[
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Vestibulum at eros',
]
ReactDOM.render(<App items={chirps} />, document.getElementById('root'));
