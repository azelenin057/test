import React from 'react';
import css from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={css.todoList__item}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        ></input>
        <p>{text}</p>
        <button
          className={css.todoList__button}
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
