/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import TodoList from "./TodoList";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div>
	<TodoList/>
  </div>, 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


var destination = document.querySelector('#container');


ReactDOM.render(
  <div>
	<TodoList/>
  </div>, 
  destination
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";


var destination = document.querySelector('#container');


ReactDOM.render(
  <div>
	<TodoList/>
  </div>, 
  destination
);