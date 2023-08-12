import {
  TodoType,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_STATUS,
  RENAME_TODO,
  TodoActionTypes,
} from '@redux/types';

// add todo
export function addTodo(newTodo: TodoType): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
}

// delete todo
export function deleteTodo(todo: TodoType): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
}

// update todo status
export function updateStatus(payload: {
  id: number;
  status: 'todo' | 'completed';
}): TodoActionTypes {
  return {
    type: UPDATE_STATUS,
    payload,
  };
}

// rename todo
export function renameTodo(id: number, title: string): TodoActionTypes {
  return {
    type: RENAME_TODO,
    payload: {id, title},
  };
}
