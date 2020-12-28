import React from "react";
import {
  Layout,
  Typography,
  Icon,
  IconButton,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "mdc-react";

export const TodoDetails = ({ todo, onClose }) => {
  return (
    <aside className="todo-details">
      <Layout row justifyContent="between" alignItems="center">
        <Typography>Деталі задачі</Typography>
        <IconButton onClick={onClose}>
          <Icon>close</Icon>
        </IconButton>
      </Layout>
      <Layout>{todo.title}</Layout>
      <Layout>
        <Checkbox checked={todo.completed} onChange={() => {}} />
        <TextField value={todo.title} onChange={() => {}} fullWidth />
        {todo.steps && todo.steps.length > 0 && (
          <List>
            {todo.steps.map((step, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText>{step}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        )}
      </Layout>
    </aside>
  );
};
