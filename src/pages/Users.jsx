import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard";
import { TextField, Container, Grid, Typography, CircularProgress } from "@mui/material";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Список користувачів
      </Typography>
      
      <TextField
        fullWidth
        label="Пошук за іменем"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: 4 }}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {filtered.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </Grid>
      )}
    </Container>
  );
}