import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

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
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center">
          <Card sx={{ maxWidth: 345, p: 2 }} variant="outlined">
            <Stack direction="row" justifyContent="center">
              <Avatar {...stringAvatar('Siddhant Parmar')} />
            </Stack>
            <CardContent>
            <TextField 
              required
              id="name" 
              label="Name" 
              variant="filled"
              defaultValue="Siddhant Parmar"
            />
            <TextField 
              required
              id="email"
              label="Email" 
              variant="filled"
              defaultValue="email@address.com" 
            />
            <TextField 
              id="something" 
              label="Something" 
              variant="filled"
              defaultValue="anything else" 
            />
            </CardContent>
            <Stack direction="row" justifyContent="center">
              <CardActions>
                <Button size="small" href='/profile'>Save</Button>
              </CardActions>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Edit;
