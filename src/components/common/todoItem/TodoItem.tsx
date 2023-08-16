import { useState } from 'react';
import { ITodo } from 'types';

interface Iprops {
  todo: ITodo;
  editTodo: (id: number, todo: string, isCompleted: boolean) => void;
  deleteTodo: (id: number) => Promise<void>;
}
const TodoItem = ({ todo, editTodo, deleteTodo }: Iprops) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);

  return (
    <li>
      {!editMode ? (
        <>
          <label>
            <input
              type='checkbox'
              defaultChecked={todo.isCompleted}
              onChange={(e) => {
                editTodo(todo.id, editedTodo, e.target.checked);
              }}
            />
            <span>{todo.todo}</span>
          </label>
          <button
            data-testid='modify-button'
            onClick={() => setEditMode(!editMode)}
          >
            수정
          </button>
          <button
            data-testid='delete-button'
            onClick={() => deleteTodo(todo.id)}
          >
            삭제
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type='checkbox'
              defaultChecked={todo.isCompleted}
              onChange={(e) => {
                editTodo(todo.id, editedTodo, e.target.checked);
              }}
            />
            <input
              data-testid='modify-input'
              defaultValue={todo.todo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          </label>
          <button
            onClick={(e) => {
              editTodo(todo.id, editedTodo, todo.isCompleted);
              setEditMode(false);
            }}
            data-testid='submit-button'
            type='submit'
          >
            제출
          </button>
          <button data-testid='cancel-button'>취소</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
