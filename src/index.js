import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';


ReactDOM.render(
  //여기서 root와 최상위 comp인 App을 연결해준다 root는 index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


