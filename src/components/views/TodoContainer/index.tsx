import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from 'services/api';

import TodoItem from 'components/common/todoItem/TodoItem';
import { ITodo } from 'types';
import * as S from './TodoContainer.style';

const TodoContainer = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };

  const getTodos = async () => {
    try {
      const response = await axios.get(`${API}/todos`, { headers });
      setTodoList(response.data);
    } catch (err) {
      throw err;
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post(`${API}/todos`, { todo }, { headers });
      console.log('add', response.data);
      getTodos();
      setTodo('');
    } catch (err) {
      throw err;
    }
  };

  const editTodo = async (
    id: number,
    editedTodo: string,
    isCompleted: boolean
  ) => {
    const updated = {
      todo: editedTodo,
      isCompleted,
    };

    console.log(isCompleted);
    try {
      await axios.put(`${API}/todos/${id}`, updated, {
        headers,
      });
      getTodos();
    } catch (err) {
      throw err;
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API}/todos/${id}`, { headers });
      getTodos();
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    console.log('🤗 render');
    getTodos();
  }, []);

  return (
    <S.Warpper>
      <div>todo</div>
      <input
        data-testid='new-todo-input'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={() => addTodo()} data-testid='new-todo-add-button'>
        추가
      </button>
      {todoList.map((todo: ITodo, index: number) => (
        <React.Fragment key={todo.id + index}>
          <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
        </React.Fragment>
      ))}
    </S.Warpper>
  );
};

export default TodoContainer;
