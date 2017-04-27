import { ADD_TODO, COMPLETE_TODO, UNCOMPLETE_TODO, DELETE_TODO, EDIT_TODO } from '../actions/constants';

const initialState = [
  { id: 1, title: 'Eat', status: false },
  { id: 2, title: 'Sleep', status: false },
  { id: 3, title: 'Code', status: false },
];

const addTodo = (state, newTodo) => {
  const newTitle = newTodo.title
  const ids = state.map(todo => todo.id);
  const newId = Math.max(...ids) + 1;
  const todo = {
    id: newId,
    title: newTitle,
    status: false,
  };
  const newState = [...state, todo];
  return newState;
};

const completeTodo = (state, todoId) => {
  const newState = state.map(todo => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        title: todo.title,
        status: true
      };
    }
    return todo;
  });
  return newState;
}

const uncompleteTodo = (state, todoId) => {
  const newState = state.map(todo => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        title: todo.title,
        status: false
      };
    }
    return todo;
  });
  return newState;
}

const editTodo = (state, updatedTodo) => {
  console.log(updatedTodo);
  const newState = state.map(todo => {
    if (todo.id === updatedTodo.id) {
      return {
        id: todo.id,
        title: updatedTodo.title,
        status: todo.status
      };
    }
    return todo;
  });
  return newState;
}

const deleteTodo = (state, todoId) => {
  const newState = state.filter(todo => todo.id !== todoId);
  return newState;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    case COMPLETE_TODO: return completeTodo(state, action.payload);
    case UNCOMPLETE_TODO: return uncompleteTodo(state, action.payload);
    case DELETE_TODO: return deleteTodo(state, action.payload);
    case EDIT_TODO: return editTodo(state, action.payload);
    default: return state;
  }
};

export default todoReducer;
