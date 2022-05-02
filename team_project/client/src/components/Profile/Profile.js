import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import AppBarmenu from './../AppBarmenu';
// dummy account; no db of accounts
import profile from "./../SignIn/login_credentials.json";

const theme = createTheme();

function Profile() {
  const navigate = useNavigate();
  const editProfile = (event) => {
    event.preventDefault();
    navigate("/edit");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBarmenu />
      <Container maxWidth="xs" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center">
          <Card sx={{ maxWidth: 1000, p: 2 }} variant="outlined">
            <CardContent>
              <Typography component="h1" variant="h5" sx={{ mb: 2,}}>
                Profile
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Avatar alt={profile.fname} src={profile.image} />
              </Stack>
              <Box
                sx={{ 
                  mt: 3,
                  alignItems: "center", 
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth
                      id="fname" 
                      name="fname"
                      label="First Name" 
                      variant="filled"
                      defaultValue={profile.fname}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField 
                      fullWidth
                      id="fname" 
                      name="fname"
                      label="First Name" 
                      variant="filled"
                      defaultValue={profile.lname}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField 
                      fullWidth
                      id="email"
                      name="email"
                      label="Email" 
                      variant="filled"
                      defaultValue={profile.email}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField 
                      fullWidth
                      id="position" 
                      name="position"
                      label="Position" 
                      variant="filled"
                      defaultValue={profile.position} 
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Grid>
                </Grid>
                <Button size="small" variant="contained" sx={{ mt: 3}} onClick={editProfile}>
                  Edit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Stack>
        {/* Add additional profile stuff here? */}
        {/* <Stack direction="row" justifyContent="center">
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
        </Stack> */}
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
