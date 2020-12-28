import React, { useEffect, useMemo, useReducer } from "react";
import { AppDrawer } from "./components/appDrawer";
import { AppContent } from "./components/appContent";
import { Switch, Route } from "react-router-dom";
import { TodoListPage } from "./pages/todoList";
import DataContex from "./context/data";
import { reducer, initialState, actions } from "./store";
import { LoginPage } from "./pages/login";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    actions.getLists(dispatch);
    actions.setAuth(dispatch);
  }, []);

  return (
    <DataContex.Provider value={contextValue}>
      <div className="app">
        <AppDrawer lists={state.lists} />
        <AppContent>
          <Switch>
            <Route exact path="/" component={TodoListPage} />
            <Route exact path="/important" component={TodoListPage} />
            <Route exact path="/planned" component={TodoListPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/:listId/:todoId?" component={TodoListPage} />
          </Switch>
        </AppContent>
      </div>
    </DataContex.Provider>
  );
}
