import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function Navbar(props) {
  const { sections } = props;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
          {/* <Button variant="contained" size="small" href='/signin'>
            Sign In
          </Button> */}
          <Button variant="contained" size="small" href='/signin'>
            Sign Out
          </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto', borderBottom: 1, borderColor: 'divider' }}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
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
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
