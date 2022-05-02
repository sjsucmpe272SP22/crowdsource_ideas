import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Navbar.css";

const theme = createTheme();

function Navbar(props) {
  const { sections } = props;

  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();

    // TODO
    // need to update this to check if user is logged in
    if (window.location.href.indexOf("signin") === -1) {
      event.currentTarget.style.display = "none";
      var soButton = document.getElementById("signOut");
      soButton.style.display = "block";

      navigate("/signin");
    }
  };

  const signOut = (event) => {
    event.preventDefault();
    event.currentTarget.style.display = "none";

    var siButton = document.getElementById("signIn");
    siButton.style.display = "block";

    navigate("/signin");
  };

  const changePage = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.id);

    // TODO
    if (event.currentTarget.id === "/profile") {
      // if logged in, goto profile page
      // else goto login page
    }

    navigate(event.currentTarget.id);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Button size="small"></Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            <h2 style={{ color: "#0173ce" }}>
              &nbsp;&nbsp;&nbsp; Crowdsource Ideas
            </h2>
          </Typography>
          <Button id="signIn" variant="contained" size="small" onClick={signIn}>
            Sign In
          </Button>
          <Button
            id="signOut"
            variant="contained"
            size="small"
            onClick={signOut}
          >
            Sign Out
          </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{
            justifyContent: "space-between",
            overflowX: "auto",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {sections.map((section) => (
            <Link
              id={section.url}
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              // href={section.url}
              onClick={changePage}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </React.Fragment>
    </ThemeProvider>
  );
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
