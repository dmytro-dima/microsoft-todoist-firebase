import React, { useState } from "react";

import {
  Layout,
  Typography,
  Card,
  CardSection,
  TextField,
  CardActions,
  Button,
} from "mdc-react";
import { actions } from "../../store";

export const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.loginUser(login, password);
  };

  return (
    <Layout id="login-page" className="page">
      <Typography variant="headline2">React Todo</Typography>

      <form onSubmit={handleSubmit}>
        <CardSection primary>
          <TextField
            type="email"
            value={login}
            required
            fullWidth
            onChange={(e) => setLogin(e.target.value)}
          />

          <TextField
            type="password"
            value={password}
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardSection>

        <CardActions>
          <Button>Войти</Button>
          <Button>Зарегистрироваться</Button>
        </CardActions>
      </form>
    </Layout>
  );
};
