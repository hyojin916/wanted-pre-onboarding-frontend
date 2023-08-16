import React, { useEffect, useState } from 'react';
import instance from 'utils/interceptors';

import TodoItem from 'components/common/todoItem/TodoItem';
import { ITodo } from 'types';
import * as S from './TodoContainer.style';

const TodoContainer = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>();

  const getTodos = async () => {
    try {
      const response = await instance.get(`/todos`);
      setTodoList(response.data);
    } catch (err) {
      throw err;
    }
  };

  const addTodo = async () => {
    try {
      const response = await instance.post(`/todos`, { todo });
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
      await instance.put(`/todos/${id}`, updated);
      getTodos();
    } catch (err) {
      throw err;
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await instance.delete(`/todos/${id}`);
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
