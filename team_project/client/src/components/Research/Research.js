import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import AppBarmenu from './../AppBarmenu';
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  // PieChart,
  // Pie,
  // Sector,
  // PieLabel,
  // Label,
} from "recharts";

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  margin: 1,
}));

function Research() {

  return (
    <ThemeProvider theme={theme}>
      <AppBarmenu />
      <Container maxWidth >
        <Typography component="h1" variant="h5" sx={{ m: 2}}>
          Research
        </Typography>
        <Grid container spacing={2}>
          <Grid item s={12} sm={6}>
            <Stack direction="column" justifyContent="center">
              {/* stuff here */}
              
              <Item>
                <hr />
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample1</h4>
                <br />
                <ResponsiveContainer height="100%" width="88%" aspect={2.4}>
                  <BarChart
                    width={500}
                    height={300}
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
                    <Legend layout="vertical" verticalAlign="top" align="right" />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Item>
              <Item>
                <hr />
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample2</h4>
                <br />
                <ResponsiveContainer height="100%" width="88%" aspect={2.4}>
                  <BarChart
                    width={500}
                    height={300}
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
                    <Legend layout="vertical" verticalAlign="top" align="right" />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Item>
            </Stack>
          </Grid>
          <Grid item s={12} sm={6}>
            <Stack direction="column" justifyContent="center">
              {/* stuff here */}

              <Item>
                <hr />
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample3</h4>
                <br />
                <ResponsiveContainer height="100%" width="88%" aspect={2.4}>
                  <BarChart
                    width={500}
                    height={300}
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
                    <Legend layout="vertical" verticalAlign="top" align="right" />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Item>
              <Item>
                <hr />
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample4</h4>
                <br />
                <ResponsiveContainer height="100%" width="88%" aspect={2.4}>
                  <BarChart
                    width={500}
                    height={300}
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
                    <Legend layout="vertical" verticalAlign="top" align="right" />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Research;
