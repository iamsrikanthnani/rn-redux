import {
  Todo,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_STATUS,
  RENAME_TODO,
  TodoActionTypes,
} from '@redux/types';

interface TodoState {
  todos: Todo[];
  completeds: Todo[];
}

const initialState: TodoState = {
  todos: [],
  completeds: [],
};

export function todoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoState {
  switch (action.type) {
    case ADD_TODO: // add todo
      return {
        ...state,
        todos: [...state.todos, action.payload]?.reverse(),
      };
    case DELETE_TODO: // delete todo
      return action.payload.status === 'completed'
        ? {
            ...state,
            completeds: state.completeds.filter(
              todo => todo.id !== action.payload.id,
            ),
          }
        : {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload.id),
          };
    case UPDATE_STATUS: // update todo status
      const {id, status} = action.payload;
      const updatedTodos = state.todos.filter(todo => todo.id !== id);
      const updatedCompleteds = state.completeds.filter(todo => todo.id !== id);
      const todoToUpdate = state.todos.find(todo => todo.id === id);
      const completedTodoToUpdate = state.completeds.find(
        todo => todo.id === id,
      );

      if (status === 'completed') {
        // Move the todo to 'completeds' array if it exists in 'todos'
        if (todoToUpdate) {
          const updatedTodo = {...todoToUpdate, status};
          return {
            ...state,
            todos: updatedTodos,
            completeds: [...state.completeds, updatedTodo]?.reverse(),
          };
        }
      } else {
        // Move the todo to 'todos' array if it exists in 'completeds'
        if (completedTodoToUpdate) {
          const updatedTodo = {...completedTodoToUpdate, status};
          return {
            ...state,
            completeds: updatedCompleteds,
            todos: [...state.todos, updatedTodo],
          };
        }
      }

      return state;
    case RENAME_TODO: // rename todo
      return {
        ...state,
        completeds: state.completeds.map(todo =>
          todo.id === action.payload.id
            ? {...todo, title: action.payload.title}
            : todo,
        ),
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? {...todo, title: action.payload.title}
            : todo,
        ),
      };
    default:
      return state;
  }
}
