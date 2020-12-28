import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };

  const list = () => {
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>text</List>
      </div>
    );
  };

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>right</Button>

      <Drawer anchor="right" open={state} onClose={() => toggleDrawer(false)}>
        <h1>text</h1>
      </Drawer>
    </div>
  );
}
