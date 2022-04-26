import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Navbar } from "react-bootstrap";
import AddIdeaForm from "./AddIdeaForm";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import API from "../../backend";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Navbar component

import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [ideas, setIdeas] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: " #fff",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
  };

  React.useEffect(() => {
    axios.get(API + "/dashboard/getIdeas").then((response) => {
      setIdeas(response.data.ideas);
    });
    console.log(ideas);
  }, []);

  return (
    <>
      {/* call Navbar Component */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">
              <h2 style={{ color: "#0173ce" }}>
                &nbsp;&nbsp;&nbsp; Crowdsource Ideas
              </h2>
            </Navbar.Brand>
            <Button variant="contained" onClick={handleOpen}>
              Add Idea
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h3>Create Idea</h3>
                <br />
                <AddIdeaForm />
              </Box>
            </Modal>
          </Navbar>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Grid>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                  >
                    Ideas Portal
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    <br />
                    CMPE-272 Ideas Portal
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
            <br />
            <p>
              <strong>New Ideas</strong>
            </p>
            {ideas.map((item, i) => (
              <li style={{ fontSize: "12px" }}>
                PROD-I-{i} <a href="url">{item.name}</a>
              </li>
            ))}
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
