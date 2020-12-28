import React, { useState } from "react";
import { List, ListItem, TextField } from "mdc-react";

export const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(title);
    setTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <List>
        <ListItem>
          <TextField
            // label="Что нужно сделать..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </ListItem>
      </List>
    </form>
  );
};
