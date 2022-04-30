import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import profile from "./profile.json";

const theme = createTheme();
// const fs = require('fs');
// const fileName = "./profile.json";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function Edit() {
  const navigate = useNavigate();
  const updateProfile = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      position: data.get("position"),
    });

    // need permanent solution
    profile.name = data.get("name");
    profile.email = data.get("email");
    profile.position = data.get("position");

    //
    // fs.writeFile(fileName, JSON.stringify(profile, null, 2), function writeJSON(err) {
    //   if (err) return console.log(err);
    //   console.log(JSON.stringify(profile));
    //   console.log("Profile Updated: " + fileName);
    // });

    navigate("/profile");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center">
          <Card sx={{ maxWidth: 345, p: 2 }} variant="outlined">
            <CardContent>
              <Stack direction="row" justifyContent="center">
                <Avatar {...stringAvatar('Siddhant Parmar')} />
              </Stack>
              <Box
                component="form"
                onSubmit={updateProfile}
                noValidate
              >
                <TextField 
                  required
                  id="name" 
                  name="name"
                  label="Name" 
                  variant="filled"
                  defaultValue={profile.name}
                />
                <TextField 
                  required
                  id="email"
                  name="email"
                  label="Email" 
                  variant="filled"
                  defaultValue={profile.email}
                />
                <TextField 
                  id="position" 
                  name="position"
                  label="Position" 
                  variant="filled"
                  defaultValue={profile.position} 
                />
                <Button type="submit" size="small" variant="contained">
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
