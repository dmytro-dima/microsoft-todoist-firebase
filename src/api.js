import { db, auth } from "./firebase";

export const getLists = () => {
  return db
    .collection("lists")
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export const getTodos = () => {
  return db
    .collection("todos")
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export const getListTodos = (listId) => {
  return db
    .collection("todos")
    .where("listId", "==", listId)
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return items;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export const createTodo = (data) => {
  return db
    .collection("todos")
    .add({
      ...data,
      completed: false,
    })
    .then((docRef) => docRef.get())
    .then((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export const deleteTodo = (todoId) => {
  return db
    .collection("todos")
    .doc(todoId)
    .delete()
    .then(() => todoId)
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};

export const updateTodo = (todoId, data) => {
  return db
    .collection("todos")
    .doc(todoId)
    .update(data)
    .then(() => ({ id: todoId, ...data }))
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
};

export const onAuth = (handleAuth) => {
  auth.onAuthStateChanged(handleAuth);
};

export const loginUser = (login, password) => {
  auth
    .signInWithEmailAndPassword(login, password)
    .then(() => console.log("USER_LOGIN"))
    .catch((error) => {
      console.log("error_login");
    });
};
