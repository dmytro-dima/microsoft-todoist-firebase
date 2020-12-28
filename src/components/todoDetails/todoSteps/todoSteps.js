import {
  Checkbox,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemGraphic,
  ListItemMeta,
  Typography,
} from "mdc-react";
import React from "react";

export const TodoSteps = ({ todo, handleChange, deleteStep }) => {
  return (
    todo.steps &&
    todo.steps.length > 0 && (
      <List className="todo-step-list" dense>
        {todo.steps.map((step) => (
          <ListItem key={step.stepId}>
            <ListItemGraphic>
              <Checkbox
                checked={step.completed}
                onClick={() => handleChange(step.stepId)}
              />
            </ListItemGraphic>
            <Typography>{step.title}</Typography>
            <ListItemMeta>
              <IconButton onClick={() => deleteStep(step.stepId)}>
                <Icon>close</Icon>
              </IconButton>
            </ListItemMeta>
          </ListItem>
        ))}
      </List>
    )
  );
};
