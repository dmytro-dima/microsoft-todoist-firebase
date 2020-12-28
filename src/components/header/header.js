import React, { useState } from "react";
import { Icon, IconButton, TopAppBar } from "mdc-react";
import { MenuItem, Menu } from "@material-ui/core";

export const HeaderBar = ({ list, handleSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);
    handleSort(type);
  };

  return (
    <>
      <TopAppBar
        title={list ? list.title : "Задачі"}
        className="top-app__bar"
        actionItems={[
          <IconButton onClick={handleClick}>
            <Icon>sort</Icon>
          </IconButton>,
        ]}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("without")}>
          without sorting
        </MenuItem>
        <MenuItem onClick={() => handleClose("title")}>title</MenuItem>
        <MenuItem onClick={() => handleClose("data")}>data</MenuItem>
        <MenuItem onClick={() => handleClose("completed")}>completed</MenuItem>
        <MenuItem onClick={() => handleClose("important")}>important</MenuItem>
      </Menu>
    </>
  );
};
