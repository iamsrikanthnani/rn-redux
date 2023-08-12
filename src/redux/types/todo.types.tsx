export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const RENAME_TODO = 'RENAME_TODO';

export interface TodoType {
  id: number;
  title: string;
  status: 'todo' | 'completed';
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: Todo;
}

interface UpdateStatusAction {
  type: typeof UPDATE_STATUS;
  payload: {id: number; status: 'todo' | 'completed'};
}

interface RenameTodoAction {
  type: typeof RENAME_TODO;
  payload: {id: number; title: string};
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | UpdateStatusAction
  | RenameTodoAction;
