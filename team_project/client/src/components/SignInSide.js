import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AppBarmenu from './AppBarmenu';
import { useHistory } from 'react-router-dom';
import axios from "axios";
// import * as configData from "./configurl.json";
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var def = true

export default function SignInSide() {
    const [text, setText] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [emptyMessage, setEmptyMessage] = React.useState("");

    React.useEffect(() => {
        // Set errorMessage only if text is equal or bigger than MAX_LENGTH
        if (!regex.test(text)) {
            setErrorMessage(
                "Please enter a valid Email ID"
            );
        }
    }, [text]);
    React.useEffect(() => {

        if (regex.test(text) && errorMessage) {
            setErrorMessage("");
        }
    }, [text, errorMessage]);
    // const history = useHistory();
    var lengthError = false;
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(configData.default);
        // const data = new FormData(event.currentTarget);

        // // let val  = (def) ? false : (!regex.test(text))
        // let val = false
        // if (def) {
        //     val = false
        // } else {
        //     val = regex.test(text)
        // }
        // lengthError = (document.getElementById("password").value.length > 0) ? true : false
        // if (lengthError && val) {
        //     var requestBody = {
        //         "email": document.getElementById("email").value,
        //         "password": document.getElementById("password").value
        //     }
        //     // axios.post("http://127.0.0.1:8000/login", requestBody)
        //     axios.post("http://" + configData.default.LOCAL_URL + ":8000/login", requestBody)

        //         .then(res => {
        //             const result = res.data.customer_id;
        //             localStorage.setItem("customerid", JSON.stringify(result))
        //             history.push('/mybookings');
        //         })

        // } else {

        // }

    };

    return (
        <ThemeProvider theme={theme}>
            {/* <AppBarmenu /> */}
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        // backgroundImage: 'url(https://source.unsplash.com/random)',
                        // backgroundImage: 'url(https://wallpapercave.com/wp/wp2574287.jpg)',
                        backgroundImage: 'url(https://wallpaperaccess.com/full/2811932.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                error={(def) ? false : (!regex.test(text))}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                helperText={errorMessage}
                                onChange={(e) => { setText(e.target.value); def = false }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                helperText={lengthError ? "Please enter Password" : ""}
                                error={lengthError}
                                autoComplete="current-password"
                                onChange={(e) => {
                                    if (e.target.value && e.target.value.length > 0) {
                                        lengthError = false
                                    }
                                    else {
                                        lengthError = false
                                    }
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}