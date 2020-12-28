import React, { useState } from "react";
import { Button, Icon, Layout } from "mdc-react";
import TextField from "@material-ui/core/TextField";

export const ListForm = ({ createList, userId }) => {
  const [isListFormOpen, setListFormOpen] = useState(false);
  const [list, setList] = useState("");

  const createTodoLists = (e) => {
    e.preventDefault();

    createList({ title: list, userId });
    setList("");
    setListFormOpen(false);
  };

  return (
    <Layout>
      {isListFormOpen ? (
        <form onSubmit={createTodoLists}>
          <TextField
            id="standard-basic"
            fullWidth
            label={list ? "" : " Добавити новий список задач"}
            onChange={(e) => setList(e.target.value)}
          />
        </form>
      ) : (
        <Button icon={<Icon>add</Icon>} onClick={() => setListFormOpen(true)}>
          Добавити список задач
        </Button>
      )}
    </Layout>
  );
};
