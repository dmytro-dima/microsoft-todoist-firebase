export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };

    case "GET_LISTS":
      return {
        ...state,
        lists: action.payload.lists,
      };

    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload.todos,
      };

    case "GET_LIST_TODOS":
      return {
        ...state,
        todos: action.payload.todos,
      };

    case "CREATE_TODO":
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
      };

    case "CREATE_LIST":
      return {
        ...state,
        lists: state.lists.concat(action.payload.list),
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.todo.id) {
            return {
              ...todo,
              ...action.payload.todo,
            };
          }
          return todo;
        }),
      };

    case "UPDATE_LIST":
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.list.id
            ? { ...list, ...action.payload.list }
            : list
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.todoId),
      };

    case "DELETE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.listId),
      };

    default:
      return state;
  }
}
