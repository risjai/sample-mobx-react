import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from './TodoList'
import Store from './TodoStore'

ReactDOM.render(<TodoList store={Store} />, document.getElementById('root'));
// registerServiceWorker();
