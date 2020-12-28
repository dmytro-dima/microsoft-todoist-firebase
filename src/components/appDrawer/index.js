import React, { useContext } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  Icon,
  List,
  ListItem,
  ListItemText,
  ListItemGraphic,
  ListGroup,
  ListDivider,
} from "mdc-react";
import { NavLink } from "react-router-dom";
import DataContext from "../../context/data";

export const AppDrawer = ({ lists }) => {
  const { state } = useContext(DataContext);

  return (
    <Drawer id="app-drawer">
      <DrawerHeader
        title="React-todo"
        subtitle={state.user ? state.user.email : ""}
      />
      <DrawerContent>
        <ListGroup>
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
          <ListDivider element="hr" />
          <List>
            {lists.map((item) => (
              <ListItem key={item.id} component={NavLink} to={item.id}>
                <ListItemGraphic>
                  <Icon>list</Icon>
                </ListItemGraphic>
                <ListItemText>{item.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </ListGroup>
      </DrawerContent>
    </Drawer>
  );
};
