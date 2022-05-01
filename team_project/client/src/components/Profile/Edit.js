import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import profile from "./profile.json";
import sid from "./sid.jpg"

const theme = createTheme();

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
              <Stack direction="row" justifyContent="center">
                <Button
                  component="label"
                >
                  <Avatar id='prof_pic' alt={profile.name} src={profile.image}/>
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
                  p: 1,
                  alignItems: "center", 
                  display: "flex",
                  flexDirection: "column",
                }}
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
                <br></br>
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
