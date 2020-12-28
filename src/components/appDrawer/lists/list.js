import { Icon, ListItem, ListItemGraphic } from "mdc-react";
import { NavLink } from "react-router-dom";
import React from "react";
import { FormEditList } from "./formEditList";

export const ItemList = ({ item, deleteList, updateList }) => {
  return (
    <ListItem
      key={item.id}
      component={NavLink}
      to={item.id}
      activeClassName="mdc-list-item--activated"
    >
      <ListItemGraphic>
        <Icon>list</Icon>
      </ListItemGraphic>
      <FormEditList
        item={item}
        deleteList={deleteList}
        updateList={updateList}
      />
    </ListItem>
  );
};
