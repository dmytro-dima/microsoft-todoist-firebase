import React from "react";
import {
  ListItem,
  ListItemGraphic,
  Checkbox,
  ListItemText,
  Icon,
  IconButton,
  ListItemMeta,
} from "mdc-react";

export const TodoListItem = ({
  todo,
  onStatusChange,
  onDelete,
  onUpdate,
  onSelect,
}) => {
  function handleChange(event) {
    const completed = event.target.checked;
    onUpdate(todo.id, { completed });
  }

  return (
    <ListItem className="todo-list-item">
      <ListItemGraphic>
        <Checkbox checked={todo.completed} onChange={handleChange} />
      </ListItemGraphic>
      <ListItemText onClick={() => onSelect(todo)}>{todo.title}</ListItemText>
      <ListItemMeta>
        <IconButton onClick={() => onDelete(todo.id)}>
          <Icon>delete</Icon>
        </IconButton>
      </ListItemMeta>
    </ListItem>
  );
};
