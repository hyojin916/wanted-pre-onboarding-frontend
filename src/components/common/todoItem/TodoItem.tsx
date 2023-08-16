import { useState } from 'react';
import { ITodo } from 'types';
import * as S from './TodoItem.style';

interface Iprops {
  todo: ITodo;
  editTodo: (id: number, todo: string, isCompleted: boolean) => void;
  deleteTodo: (id: number) => Promise<void>;
}
const TodoItem = ({ todo, editTodo, deleteTodo }: Iprops) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);

  return (
    <S.TodoWrapper>
      {!editMode ? (
        <S.TodoItem>
          <div>
            <label>
              <S.InputCheckBox
                type='checkbox'
                defaultChecked={todo.isCompleted}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  editTodo(todo.id, editedTodo, e.target.checked);
                }}
              />
              <span>{todo.todo}</span>
            </label>
          </div>
          <div>
            <S.Button
              data-testid='modify-button'
              onClick={() => setEditMode(!editMode)}
            >
              수정
            </S.Button>
            <S.Button
              data-testid='delete-button'
              onClick={() => deleteTodo(todo.id)}
            >
              삭제
            </S.Button>
          </div>
        </S.TodoItem>
      ) : (
        <S.TodoItem>
          <div>
            <label>
              <S.InputCheckBox
                type='checkbox'
                defaultChecked={todo.isCompleted}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  editTodo(todo.id, editedTodo, e.target.checked);
                }}
              />
              <S.Input
                data-testid='modify-input'
                defaultValue={todo.todo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEditedTodo(e.target.value)
                }
              />
            </label>
          </div>
          <div>
            <S.Button
              onClick={() => {
                editTodo(todo.id, editedTodo, todo.isCompleted);
                setEditMode(false);
              }}
              data-testid='submit-button'
              type='submit'
            >
              제출
            </S.Button>
            <S.Button
              onClick={() => setEditMode(false)}
              data-testid='cancel-button'
            >
              취소
            </S.Button>
          </div>
        </S.TodoItem>
      )}
    </S.TodoWrapper>
  );
};

export default TodoItem;
