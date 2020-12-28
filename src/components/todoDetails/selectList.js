import React from "react";
import { InputLabel, FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SelectList = ({ list, lists, handleChange }) => {
  const classes = useStyles();
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      onChange={(event) => handleChange(event.target.value)}
    >
      {lists.map((list) => (
        <MenuItem key={list.id} value={list.id}>
          {list.title}
        </MenuItem>
      ))}
    </Select>
  );
};
