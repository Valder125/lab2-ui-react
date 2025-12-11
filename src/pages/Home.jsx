import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Лабораторна робота №2
      </Typography>
      <Typography variant="h6" paragraph>
        React + Vite + Material UI + Dark Mode
      </Typography>
      <Button variant="contained" component={Link} to="/users">
        Перейти до користувачів
      </Button>
    </Container>
  );
}