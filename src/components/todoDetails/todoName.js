import {
  Icon,
  IconButton,
  Layout,
  ListItemMeta,
  TextField,
  Typography,
} from "mdc-react";
import React, { useState } from "react";

export const TodoName = ({ todo, handleSubmit }) => {
  const [edinTitle, setEditTitle] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmitName = (e) => {
    e.preventDefault();

    handleSubmit(title);
    setEditTitle(null);
    setTitle("");
  };

  const editNameTodo = () => {
    setEditTitle(todo);
    setTitle(todo.title);
  };

  return edinTitle && edinTitle.id === todo.id ? (
    <form onSubmit={handleSubmitName}>
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
    </form>
  ) : (
    <Layout row>
      <Typography>{todo.title}</Typography>
      <ListItemMeta>
        <IconButton onClick={() => editNameTodo()}>
          <Icon>edit</Icon>
        </IconButton>
      </ListItemMeta>
    </Layout>
  );
};
