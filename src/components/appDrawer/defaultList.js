import React from "react";
import {
  Icon,
  List,
  ListGroup,
  ListItem,
  ListItemGraphic,
  ListItemText,
} from "mdc-react";
import { NavLink } from "react-router-dom";

export const DefaultList = () => {
  return (
    <List>
      {[
        { title: "Задачи", icon: "home", to: "/" },
        { title: "Важливі", icon: "star", to: "/important" },
        { title: "Заплановані", icon: "event", to: "/planned" },
      ].map((item) => (
        <ListItem key={item.title} component={NavLink} to={item.to}>
          <ListItemGraphic>
            <Icon>{item.icon}</Icon>
          </ListItemGraphic>
          <ListItemText>{item.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
