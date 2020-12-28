import React, { useState } from "react";
import { Layout, Typography, SideSheet, IconButton, Icon } from "mdc-react";
import { TodoList } from "../../components/todoList";
import { TodoDetails } from "../../components/todoDetails";
import useStore from "../../hooks/store";
import { HeaderBar } from "../../components/header/header";

export const TodoListPage = ({ match }) => {
  const { state, actions } = useStore();
  const [isSelectTodo, setSelectedTodo] = useState(null);
  const [tasksSort, setTaskSort] = useState(null);

  const selectTodo = isSelectTodo
    ? state.todos.find((t) => t.id === isSelectTodo.id)
    : null;

  const list = state.lists.find((list) => list.id === match.params.listId);

  const handleDelete = (todoId) => {
    actions.deleteTodo(todoId);
  };

  const handleUpdate = (todoId, data) => {
    actions.updateTodo(todoId, data);
  };

  const handleSelect = (todo) => {
    setSelectedTodo(todo);
  };

  const handleSort = (type) => {
    list
      ? actions.updateList(list.id, { ...list, sort: type })
      : setTaskSort(type);
  };

  const handleCreate = (todoId) => {
    actions.createTodo(todoId);
  };

  return !state.lists || !state.todos ? (
    <Typography>download....</Typography>
  ) : (
    <Layout id="list-page" className="page">
      <HeaderBar list={list} handleSort={handleSort} />
      <Layout row>
        <SideSheet
          open={selectTodo}
          dismissible
          appContentSelector=".mdc-side-sheet-app-content"
        >
          <Layout row justifyContent="between" alignItems="center">
            <Typography noMargin>Детали задачи</Typography>
            <IconButton onClick={() => setSelectedTodo(null)}>
              <Icon>close</Icon>
            </IconButton>
          </Layout>

          {isSelectTodo && (
            <TodoDetails
              lists={state.lists}
              todo={selectTodo}
              onUpdate={handleUpdate}
            />
          )}
        </SideSheet>

        <TodoList
          todos={state.todos}
          list={list}
          sortType={tasksSort}
          onSelect={handleSelect}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onCreate={handleCreate}
          match={match}
          userId={state.user.uid}
        />
      </Layout>
    </Layout>
  );
};
