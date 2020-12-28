import React, { useState } from "react";
import { TodoForm } from "../../components/todoForm";
import { Button, Icon } from "@material-ui/core";

export const TodoFormBlock = ({ match, handleCreate }) => {
  const [isListFormOpen, setListFormOpen] = useState(false);

  const handleSubmit = (title) => {
    handleCreate(title);
    setListFormOpen(false);
  };

  return match.params.listId || match.path === "/tasks" ? (
    isListFormOpen ? (
      <TodoForm onSubmit={handleSubmit} />
    ) : (
      <Button
        id="todo-form__btn"
        variant="outlined"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={() => setListFormOpen(true)}
      >
        Добавити задачу
      </Button>
    )
  ) : (
    <></>
  );
};
