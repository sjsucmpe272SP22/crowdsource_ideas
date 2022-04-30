import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import profile from "./profile.json";
import sid from "./sid.jpg"

const theme = createTheme();

function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center">
          <Card sx={{ maxWidth: 1000, p: 2 }} variant="outlined">
            <Stack direction="row" justifyContent="center">
              <Avatar alt={profile.name} src={sid} />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.position}
              </Typography>
            </CardContent>
            <Stack direction="row" justifyContent="center">
              <CardActions>
                <Button size="small" variant="contained" href="/edit">
                  Edit
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Card sx={{ m: 2 }} variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Ideas
              </Typography>
              <Typography variant="body2">
                {profile.ideas}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ m: 2 }} variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Votes
              </Typography>
              <Typography variant="body2">
                {profile.votes}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
