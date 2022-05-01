import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// dummy account; no db of accounts
import profile from "./../SignIn/login_credentials.json";

const theme = createTheme();

function Edit() {
  const navigate = useNavigate();

  const updateProfile = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fname: data.get("fname"),
      lname: data.get("lname"),
      email: data.get("email"),
      position: data.get("position"),
    });

    // TODO
    // need permanent solution
    profile.fname = data.get("fname");
    profile.lname = data.get("lname");
    profile.email = data.get("email");
    profile.position = data.get("position");

    // TODO
    // make call to backend/db to properly overwrite

    console.log(profile)
    navigate("/profile");
  };

  const loadFile = (event) => {
    var image = document.getElementById("prof_pic");
    var child = image.firstElementChild;
    var img = URL.createObjectURL(event.target.files[0]);
    image.innerHTML = "";
    if (child) {
      child.src = img;
    } else {
      child = document.createElement("img");
      child.alt = profile.name;
      child.src = img;
      child.classList.add("MuiAvatar-img");
      child.classList.add("css-1pqm26d-MuiAvatar-img");
      image.appendChild(child);
    }

    // TODO
    // find way to actually save image to db
    profile.image = image.firstElementChild.src;
    console.log(profile);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center">
          <Card sx={{ maxWidth: 1000, p: 2 }} variant="outlined">
            <CardContent>
              <Typography component="h1" variant="h5"sx={{ mb: 2,}}>
                Edit Profile
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Button
                  component="label"
                >
                  <Avatar id='prof_pic' alt={profile.fname} src={profile.image}/>
                  <input
                    type="file"
                    hidden
                    onChange={loadFile}
                  />
                </Button>
              </Stack>
              <Box
                component="form"
                onSubmit={updateProfile}
                noValidate
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
                      required
                      fullWidth
                      id="fname" 
                      name="fname"
                      label="First Name" 
                      defaultValue={profile.fname}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      required
                      fullWidth
                      id="lname" 
                      name="lname"
                      label="Last Name" 
                      defaultValue={profile.lname}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      required
                      fullWidth
                      id="email"
                      name="email"
                      label="Email" 
                      defaultValue={profile.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth
                      id="position" 
                      name="position"
                      label="Position" 
                      defaultValue={profile.position} 
                    />
                  </Grid>
                </Grid>
                <Button type="submit" size="small" variant="contained" sx={{ mt: 3}}>
                  Save
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Edit;
