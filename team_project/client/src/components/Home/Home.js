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
import AppBarmenu from './../AppBarmenu';
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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Home = (props) => {
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
    console.log(ideaStatus);
  }, [ideaStatus]);

  return (
    <>
    < AppBarmenu />
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
              <Grid item xs={4}>
                <ResponsiveContainer width="100%" height="100%" aspect={1.5}>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={ideaStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {ideaStatus.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={8}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      variant="h7"
                      component="div"
                      color="text.secondary"
                    >
                      <li>Future Consideration</li>
                      <br />
                      <li>Already Exists</li>
                      <br />
                      <li>Will Not Implement</li>
                    </Typography>

                    {/* <Typography variant="body2" color="text.secondary">
                      <br />
                      CMPE-272 Ideas Portal
                    </Typography> */}
                  </CardContent>
                  {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
              </Grid>
            </Grid>
          </Item>
          <Item>
            <hr />
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ideas</h4>
            <br />
            <ResponsiveContainer height="100%" width="60%" aspect={2.4}>
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
            <hr />
            <p>
              <strong>New Ideas</strong>
            </p>
            {ideas.map((item, i) => (
              <li
                style={{ fontSize: "12px" }}
                onClick={() => handleOpenIdea(i)}
              >
                PROD-I-{i} <a>{item.name}</a> { hours !== 0 && <span style={{ color: 'blue'}}> {hours} Hours </span> }
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
