import React, { useEffect, useState } from 'react';
import instance from 'utils/interceptors';

import TodoItem from 'components/common/todoItem/TodoItem';
import { ITodo } from 'types';
import * as S from './TodoContainer.style';

const TodoContainer = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>();

  const getTodos = async () => {
    const response = await instance.get(`/todos`);
    setTodoList(response.data);
  };

  const addTodo = async () => {
    await instance.post(`/todos`, { todo });
    getTodos();
    setTodo('');
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

    await instance.put(`/todos/${id}`, updated);
    getTodos();
  };

  const deleteTodo = async (id: number) => {
    await instance.delete(`/todoss/${id}`);
    // .then((err) => console.log('여긴 컴포넌트 내 err', err)); -> 이건 console x. try catch하면 찍힘
    getTodos();
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
