import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Bem-vindo ao Sistema Escolar
      </Typography>
      <Typography variant="body1" align="center">
        Use o menu acima para navegar entre as páginas.
      </Typography>
    </Container>
  );
};

export default Home;