import React, { useContext, useEffect, useState } from "react";
import { Layout, Typography, TopAppBar } from "mdc-react";
import { TodoList } from "../components/todoList";
import { TodoForm } from "../components/todoForm";
import { TodoDetails } from "../components/todoDetails";
import DataContex from "../context/data";
import { actions } from "../store";

export const TodoListPage = ({ match }) => {
  const { state, dispatch } = useContext(DataContex);

  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    if (match.params.listId) {
      actions.getListTodos(match.params.listId, dispatch);
    } else {
      actions.getTodos(dispatch);
    }
  }, [dispatch, match.params.listId]);

  const list = state.lists.find((list) => list.id === match.params.listId);

  const handleSubmit = (title) => {
    actions.createTodo({ title, listId: list.id }, dispatch);
  };

  const handleDelete = (todoId) => {
    actions.deleteTodo(todoId, dispatch);
  };

  const handleUpdate = (todoId, data) => {
    actions.updateTodo(todoId, data, dispatch);
  };

  const handleSelect = (todo) => {
    setSelectedTodo(todo);
  };

  if (!list || !state.todos) return <Typography>download....</Typography>;

  return (
    <Layout id="list-page" className="page">
      <TopAppBar title={list.title} />
      <Layout row>
        <TodoList
          todos={state.todos}
          list={list}
          onSelect={handleSelect}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
        <TodoForm onSubmit={handleSubmit} />
      </Layout>

      {selectedTodo && (
        <TodoDetails
          todo={selectedTodo}
          onClose={() => setSelectedTodo(null)}
        />
      )}
    </Layout>
  );
};
