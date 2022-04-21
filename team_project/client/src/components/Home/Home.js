import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import AddIdeaForm from "./AddIdeaForm";
// import Navbar component

const Home = () => {
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

  return (
    <>
      {/* call Navbar Component */}
      <Row>
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
            {/* <Box style={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box> */}
            <Box sx={style}>
              <h3>Create Idea</h3>
              <br />
              <AddIdeaForm />
            </Box>
          </Modal>
        </Navbar>
      </Row>
      <Row>
        <Col xs={10}>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </>
  );
};

export default Home;
