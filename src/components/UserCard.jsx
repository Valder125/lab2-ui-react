import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function UserCard({ user }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {user.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
          <Typography variant="body2">
            City: {user.address.city}
            <br />
            Company: {user.company.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}