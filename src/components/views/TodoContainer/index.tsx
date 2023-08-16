import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from 'utils/interceptors';

import TodoItem from 'components/common/todoItem/TodoItem';
import { ITodo } from 'types';

import * as S from './TodoContainer.style';

const TodoContainer = () => {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>('');

  const getTodos = async () => {
    const response = await instance.get(`/todos`);
    setTodoList(response.data);
  };

  const addTodo = async () => {
    if (todo.trim()?.length < 1) return alert('입력해주세요.');
    await instance.post(`/todos`, { todo });
    getTodos();
    setTodo('');
  };

  const editTodo = async (
    id: number,
    editedTodo: string,
    isCompleted: boolean
  ) => {
    if (editedTodo.length < 1) return alert('입력해주세요.');
    const updated = {
      todo: editedTodo,
      isCompleted,
    };

    await instance.put(`/todos/${id}`, updated);
    getTodos();
  };

  const deleteTodo = async (id: number) => {
    await instance.delete(`/todos/${id}`);
    // .then((err) => console.log('여긴 컴포넌트 내 err', err)); -> 이건 console x. try catch하면 찍힘
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <S.Warpper>
      <h1>todo list</h1>
      <S.Input
        minLength={1}
        data-testid='new-todo-input'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
        value={todo}
        autoFocus
      />
      <S.Button onClick={() => addTodo()} data-testid='new-todo-add-button'>
        추가
      </S.Button>
      {todoList.map((todo: ITodo, index: number) => (
        <React.Fragment key={todo.id + index}>
          <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} />
        </React.Fragment>
      ))}
      <button
        onClick={() => {
          localStorage.clear();
          navigate('/signin');
        }}
      >
        로그아웃
      </button>
    </S.Warpper>
  );
};

export default TodoContainer;
