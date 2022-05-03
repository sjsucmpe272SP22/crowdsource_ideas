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
import AppBarmenu from "./../AppBarmenu";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  PieLabel,
  Label,
} from "recharts";

import "./Home.css";

import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFC20F",
  "#F39200",
  "#F35C6E",
  "#5B61AA",
];

const Home = (props) => {
  const renderCustomLabel = (entry) => {
    return `${entry.status} ${entry.count}`;
  };
  const [ideas, setIdeas] = useState([]);
  const [hours, setHours] = useState(0);
  const [ideasInformation, setIdeasInformation] = useState([]);
  const [ideaCount, setIdeaCount] = useState([]);
  const [ideaStatus, setIdeaStatus] = useState([]);
  const [open, setOpen] = useState(false);
  const [openIdea, setOpenIdea] = useState(false);
  const [index, setIndex] = useState(-1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickIdea = () => {
    console.log("idea clicked");
  };
  const handleOpenIdea = (id) => {
    setOpenIdea(true);
    console.log("success", id);
    setIndex(id);
  };
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
      setIdeaStatus(response.data.ideaStatus);
      if (response.data.ideaCount !== null) {
        setIdeaCount(response.data.ideaCount);
      }
    });
    console.log("IDEALIST", ideas);

    axios.get(API + "/dashboard/getHoursForIdea").then((response) => {
      setHours(response.data.hours);
    });
    console.log("HOURS", hours);

    axios.get(API + "/dashboard/getIdeasInformation").then((response) => {
      setIdeasInformation(response.data.ideasInformation);
      setIdeaStatus(response.data.ideaStatus);
    });
    console.log("IDEAINFOLIST", JSON.stringify(ideasInformation));
    console.log(ideaStatus);
  }, []);

  let renderLabel = function (entry) {
    return entry.name;
  };

  return (
    <>
      <AppBarmenu />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">
              <h2 style={{ color: "#0173ce" }}>
                &nbsp;&nbsp;&nbsp; Ideas Overview
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
                <OpenIdeaForm infoIdea={ideasInformation} ideaIndex={index} />
              </Box>
            </Modal>
          </Navbar>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Status</h4>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <ResponsiveContainer width="100%" height="99%" aspect={2}>
                  <PieChart>
                    <Pie
                      data={ideaStatus}
                      dataKey="count"
                      outerRadius={100}
                      innerRadius={80}
                      startAngle={90}
                      endAngle={-270}
                      isAnimationActive={true}
                      label
                      nameKey="status"
                    >
                      {ideaStatus.map((entry, index) => (
                        <Cell key={`cell-${entry}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 160, width: 600 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <div class="input-color">
                          <div
                            class="color-box"
                            style={{ "background-color": "#0088FE" }}
                          ></div>
                          &nbsp;&nbsp;&nbsp;&nbsp; Already Exists
                        </div>
                        <hr />
                        <div class="input-color">
                          <div
                            class="color-box"
                            style={{ "background-color": "#00C49F" }}
                          ></div>
                          &nbsp;&nbsp;&nbsp;&nbsp; Will Not Implement
                        </div>
                        <hr />
                        <div class="input-color">
                          <div
                            class="color-box"
                            style={{ "background-color": "#FFC20F" }}
                          ></div>
                          &nbsp;&nbsp;&nbsp;&nbsp; Future Consideration
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div class="input-color">
                          <div
                            class="color-box"
                            style={{ "background-color": "#F39200" }}
                          ></div>
                          &nbsp;&nbsp;&nbsp;&nbsp; Planned
                        </div>
                        <hr />
                        <div class="input-color">
                          <div
                            class="color-box"
                            style={{ "background-color": "#F35C6E" }}
                          ></div>
                          &nbsp;&nbsp;&nbsp;&nbsp; Shipped
                        </div>
                        <hr />
                        <div class="input-color">
                          <div
                            class="color-box"
                            style={{ "background-color": "#5B61AA" }}
                          ></div>
                          &nbsp;&nbsp;&nbsp;&nbsp; Needs Review
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Item>
          <Item>
            <hr />
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ideas</h4>
            <br />
            <ResponsiveContainer height="100%" width="70%" aspect={2.4}>
              <BarChart
                width={500}
                height={300}
                data={ideaCount}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Item>
        </Grid>
        <Grid item xs={4} style={{ justifyContent: "space-between" }}>
          <Item style={{ height: "100%" }}>
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
            <hr />
            <p>
              <strong>New Ideas</strong>
            </p>
            {ideas.map((item, i) => (
              <li
                style={{ fontSize: "12px" }}
                onClick={() => handleOpenIdea(i)}
              >
                PROD-I-{i} <a>{item.name}</a>{" "}
                {hours !== 0 && (
                  <span style={{ color: "blue" }}> {hours} Hours </span>
                )}
                <label className={"right"}>{item.date}</label>
              </li>
            ))}
            <hr />
            <p>
              <strong>Popular Ideas</strong>
            </p>
            <hr />
            <p>
              <strong>Top Contributors</strong>
            </p>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
