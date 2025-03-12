import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

const NavbarComponent = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(); // Faz logout
    navigate("/"); // Redireciona para a Home
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Escola App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {user && ( // Exibe os links apenas se o usuário estiver autenticado
            <>
              <Button color="inherit" component={Link} to="/alunos">
                Alunos
              </Button>
              <Button color="inherit" component={Link} to="/disciplinas">
                Disciplinas
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;