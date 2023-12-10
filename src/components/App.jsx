import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import shortid from 'shortid';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Сдать второе ДЗ', completed: false },
      { id: 'id-3', text: 'Начать просмотр третьего модуля', completed: false },
    ],
  };
  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };

    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.filter(todo => todo.completed);

    return (
      <>
        <TodoEditor onSubmit={this.addTodo} />

        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во выполненых: {completedTodos.length}</p>
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
