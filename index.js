import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import './firebaseConfig';



ReactDOM.render(<App />, document.getElementById('root'));