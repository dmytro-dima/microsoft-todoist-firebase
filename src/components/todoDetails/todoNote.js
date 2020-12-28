import { Button, Icon, IconButton, Layout } from "mdc-react";
import React, { useState } from "react";

export const TodoNote = ({ todo, onSubmitNote }) => {
  const [note, setNote] = useState(todo.notes ? todo.notes : "нотатка");

  return (
    <Layout id="form-note" column>
      <Layout row>
        <Button onClick={() => onSubmitNote(todo.id, note)}>
          Добавити Нотатку
        </Button>
        <IconButton
          onClick={() => {
            onSubmitNote(todo.id, "");
            setNote("");
          }}
        >
          <Icon>clear</Icon>
        </IconButton>
      </Layout>
      <textarea
        id="exampleFormControlTextarea1"
        rows="3"
        value={note}
        onSubmit={onSubmitNote}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
    </Layout>
  );
};
