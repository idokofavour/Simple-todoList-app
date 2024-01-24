import '@fortawesome/fontawesome-free/css/all.css'
import './css/style.css';

import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import TodoDate from './component/TodoDate';

const todoForm = new TodoForm();
todoForm.render()
new TodoList();
new TodoDate;

// const date = new Date("2011-08-12T20:17:46.384Z").toLocaleDateString();
// const dateTime = new Date("2011-08-12T20:17:46.384Z").toString();

// console.log(date)
// console.log(dateTime)