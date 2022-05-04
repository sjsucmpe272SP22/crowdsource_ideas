import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TimelineIcon from "@mui/icons-material/Timeline";
import CategoryIcon from "@mui/icons-material/Category";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AppBarmenu from "../AppBarmenu";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Navbar } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import API from "../../backend";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Label,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
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

const IdeaStats = () => {
  const { state } = useLocation();
  const [ideas, setIdeas] = useState([]);
  const [open, setOpen] = useState([]);
  const [totalHours, setHours] = useState(0);

  const handleClick = (index) => {
    open[index] = !open[index];
    setOpen(open);
    console.log(open);
  };

  useEffect(() => {
    axios.get(API + "/dashboard/getIdeas").then((response) => {
      setOpen(Array(response.data.ideas.length).fill(false));
      console.log(response.data.ideas);
      var temp = [];
      var totalHrs = 0;
      for (var index = 0; index < response.data.ideas.length; index++) {
        if (response.data.ideas[index].category === state) {
          totalHrs += parseInt(response.data.ideas[index].hours);
          temp.push(response.data.ideas[index]);
        }
      }
      setHours(totalHrs);
      setIdeas(temp);
    });
    console.log(open);
  }, []);

  return (
    <>
      <AppBarmenu />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="home">
              <h2
                style={{
                  "font-weight": "bold",
                  "font-family": "Roboto",
                  color: "#0173ce",
                }}
              >
                &nbsp;&nbsp;&nbsp; {state} Idea Statistics
              </h2>
            </Navbar.Brand>
          </Navbar>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <Item>
            <ResponsiveContainer width="99%" height="99%" aspect={1.9}>
              <PieChart>
                <Pie
                  data={ideas}
                  dataKey="hours"
                  outerRadius={130}
                  innerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  isAnimationActive={true}
                  label
                  nameKey="name"
                >
                  {ideas.map((entry, index) => (
                    <Cell key={`cell-${entry}`} fill={COLORS[index]} />
                  ))}
                  <Label
                    value={`${totalHours}h`}
                    position="center"
                    fill="grey"
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <ResponsiveContainer width="99%" height="99%" aspect={2.7}>
              <ComposedChart
                width={100}
                height={100}
                data={ideas}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="votes"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="hours" barSize={20} fill="#413ea0" />
                {/* <Line type="monotone" dataKey="votes" stroke="#ff7300" /> */}
                {/* <Scatter dataKey="hours" fill="red" /> */}
              </ComposedChart>
            </ResponsiveContainer>
          </Item>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <hr />
          <h2
            style={{
              "font-weight": "bold",
              "font-family": "Roboto",
              color: "#4F4546",
            }}
          >
            Idea Logs
          </h2>
          <hr />
          {ideas.map((idea, index) => (
            <Item>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemIcon>
                  <EmojiObjectsIcon />
                </ListItemIcon>
                <ListItemText primary={idea.name} />
                {!open[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={true} timeout="auto" unmountOnExit>
                <Card sx={{ width: "100%" }}>
                  <CardContent>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <WorkspacePremiumIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Workspace: ${idea.workspace}`}
                        />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Date:  ${idea.date}`} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Category: ${idea.category}`} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Description: ${idea.description}`}
                        />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Status: ${idea.status}`} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <ThumbUpIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Votes: ${idea.votes}`} />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <AvTimerIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Time Taken to Complete: ${idea.hours}h`}
                        />
                      </ListItemButton>
                    </List>
                  </CardContent>
                </Card>
              </Collapse>
            </Item>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default IdeaStats;
