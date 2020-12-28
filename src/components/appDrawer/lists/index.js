import { List } from "mdc-react";
import React from "react";
import { ItemList } from "./list";

export const Lists = ({ lists, deleteList, updateList }) => {
  return (
    <List>
      {lists.map((item) => (
        <ItemList
          key={item.id}
          item={item}
          deleteList={deleteList}
          updateList={updateList}
        />
      ))}
    </List>
  );
};
