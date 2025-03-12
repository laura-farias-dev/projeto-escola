import React, { useState, useContext } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    try {
      const success = await signIn({ email, password });
      if (success) {
        navigate("/"); // Redireciona para a Home após o login
      }
    } catch (error) {
      setError("E-mail ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}
      <TextField
        label="E-mail"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: "16px" }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default Login;