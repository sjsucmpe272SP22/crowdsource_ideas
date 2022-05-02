import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Navbar } from "react-bootstrap";
import AddIdeaForm from "./AddIdeaForm";
import OpenIdeaForm from "./OpenIdeaForm";
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
import AppBarmenu from './../AppBarmenu';

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
  const [hours, setHours] = useState(0);
  const [ideasInformation, setIdeasInformation] = useState([]);
  const [open, setOpen] = useState(false);
  const [openIdea, setOpenIdea] = useState(false);
  const [index, setIndex] = useState(-1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickIdea = () => {
    console.log("idea clicked");
  }
  const handleOpenIdea = (id) => {
    setOpenIdea(true);
    console.log("success", id);
    setIndex(id)
  }
  const handleCloseIdea = () => setOpenIdea(false);
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
    console.log("IDEALIST", ideas);
  }, []);

  React.useEffect(() => {
    axios.get(API + "/dashboard/getHoursForIdea").then((response) => {
      setHours(response.data.hours);
    });
    console.log("HOURS", hours);
  }, []);

  React.useEffect(() => {
    axios.get(API + "/dashboard/getIdeasInformation").then((response) => {
      setIdeasInformation(response.data.ideasInformation);
    });
    console.log("IDEAINFOLIST", ideasInformation);
  }, []);




  return (
    <>
      {/* call Navbar Component */}
      <AppBarmenu />
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
            <Modal
              open={openIdea}
              onClose={handleCloseIdea}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h3>Idea Information</h3>
                <br />
                <OpenIdeaForm infoIdea = {ideasInformation} ideaIndex = {index} />
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
              <li style={{ fontSize: "12px" }} onClick={() => handleOpenIdea(i)}>
                PROD-I-{i} <a>{item.name}</a> { hours !== 0 && <span style={{ color: 'blue'}}> {hours} Hours </span> }
              </li>
            ))}
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
