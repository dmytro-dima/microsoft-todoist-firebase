import * as api from "../api";

/* Auth */
export function logInUser(email, password) {
  return api.logInUser(email, password).then(() => ({}));
}

export function signOutUser() {
  return api.signOutUser().then(() => ({}));
}

export function registerUser(email, password) {
  return api.registerUser(email, password).then(() => ({}));
}

export function initAuth() {
  return (dispatch) =>
    api.initAuth((user) => {
      return user
        ? dispatch({
            type: "LOGIN_USER",
            payload: {
              user,
            },
          })
        : dispatch({
            type: "LOGOUT_USER",
          });
    });
}

/* DB */
export function getLists(userId) {
  return api.getLists(userId).then((lists) => ({
    type: "GET_LISTS",
    payload: {
      lists,
    },
  }));
}

export function getTodos(userId) {
  return api.getTodos(userId).then((todos) => ({
    type: "GET_TODOS",
    payload: {
      todos,
    },
  }));
}

export function getListTodos(userId, listId) {
  return api.getListTodos(userId, listId).then((todos) => ({
    type: "GET_LIST_TODOS",
    payload: {
      todos,
    },
  }));
}

export function createTodo(data) {
  return api.createTodo(data).then((todo) => ({
    type: "CREATE_TODO",
    payload: {
      todo,
    },
  }));
}

export function createList(data) {
  return api.createList(data).then((list) => ({
    type: "CREATE_LIST",
    payload: {
      list,
    },
  }));
}

export function updateTodo(todoId, data) {
  return api.updateTodo(todoId, data).then((todo) => ({
    type: "UPDATE_TODO",
    payload: {
      todo,
    },
  }));
}

export function updateList(listId, data) {
  return api.updateList(listId, data).then((list) => ({
    type: "UPDATE_LIST",
    payload: {
      list,
    },
  }));
}

export function deleteTodo(todoId) {
  return api.deleteTodo(todoId).then((todoId) => ({
    type: "DELETE_TODO",
    payload: {
      todoId,
    },
  }));
}

export function deleteList(listId) {
  return api.deleteList(listId).then((listId) => ({
    type: "DELETE_LIST",
    payload: {
      listId,
    },
  }));
}
