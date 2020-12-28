import {
  Icon,
  IconButton,
  ListItemMeta,
  ListItemText,
  TextField,
} from "mdc-react";
import React, { useState } from "react";

export const FormEditList = ({ item, deleteList, updateList }) => {
  const [editList, setEditList] = useState(null);
  const [editNameList, setEditNameList] = useState("");

  const updateListName = (e) => {
    e.preventDefault();

    updateList(editList.id, { title: editNameList });
    setEditList(null);
    setEditNameList("");
  };

  const isEditNameList = () => {
    setEditList(item);
    setEditNameList(item.title);
  };

  return editList && editList.id === item.id ? (
    <form onSubmit={updateListName}>
      <TextField
        value={editNameList}
        onChange={(e) => setEditNameList(e.target.value)}
      />
    </form>
  ) : (
    <>
      <ListItemText>{item.title}</ListItemText>
      <ListItemMeta>
        <IconButton onClick={() => isEditNameList()}>
          <Icon>edit</Icon>
        </IconButton>
        <IconButton onClick={() => deleteList(item.id)}>
          <Icon>close</Icon>
        </IconButton>
      </ListItemMeta>
    </>
  );
};
