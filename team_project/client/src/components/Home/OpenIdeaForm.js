import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import API from "../../backend";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Experimental_CssVarsProvider } from "@mui/material";

const OpenIdeaForm = (props) => {
  const navigate = useNavigate();
  const [vote, setVote] = useState(0);
  const [formValue, setFormValue] = useState({
    comments: "",
    todo: "",
    status: "",
    vote: vote,
  });
  // const [vote, setVote] = useState(0);
  const handleVote = (event) => {
    event.preventDefault();
    setVote(vote + 1);
    console.log("Props received1", props.infoIdea);
    console.log("Props received2", props.ideaIndex);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
    axios.post(API + "/dashboard/createIdeaInformation", { idea: formValue });
    window.location.reload(false);
  };

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
    //setFormValue({ ...formValue, formValue.vote: vote });
  };

  React.useEffect(() => {
    if (
      Object.keys(props.infoIdea).length !== 0 &&
      Object.keys(props.infoIdea).length > props.ideaIndex
    ) {
      console.log("condition check successful", props);
      document.getElementById("filled-basic-comments").value =
        props.infoIdea[props.ideaIndex].comments;
      document.getElementById("filled-basic-todo").value =
        props.infoIdea[props.ideaIndex].todo;
      document.getElementById("demo-simple-select-status").value =
        props.infoIdea[props.ideaIndex].status;
    } else {
      console.log("condition did not pass");
      document.getElementById("filled-basic-comments").value = "";
      document.getElementById("filled-basic-todo").value = "";
      document.getElementById("demo-simple-select-status").value = "";
    }
  }, []);

  return (
    <div>
      <Form>
        <FormControl fullWidth>
          <TextField
            id="filled-basic-comments"
            label="Comments"
            variant="outlined"
            // value={formValue.comments}
            // value = {props.infoIdea[props.ideaIndex].comments || ""}
            onChange={handleChange}
            name="comments"
          />
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <TextField
            id="filled-basic-todo"
            label="To-do"
            variant="outlined"
            // value={formValue.todo}
            // value = {props.infoIdea[props.ideaIndex].todo || ""}
            onChange={handleChange}
            name="todo"
          />
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-status"
            // value={formValue.category}
            // value="Needs review"
            label="Status"
            onChange={handleChange}
            name="status"
          >
            <MenuItem value={"NeedsReview"}>Needs review</MenuItem>
            <MenuItem value={"FutureConsideration"}>
              Future consideration
            </MenuItem>
            <MenuItem value={"AlreadyExists"}>Already exists</MenuItem>
            <MenuItem value={"WillNotImplementt"}>Will not implement</MenuItem>
            <MenuItem value={"Planned"}>Planned</MenuItem>
          </Select>
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <Button
            variant="contained"
            type="submit"
            size="lg"
            onClick={handleVote}
          >
            {" "}
            Vote ({vote})
          </Button>
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <Button
            variant="contained"
            type="submit"
            size="lg"
            onClick={handleSubmit}
          >
            {" "}
            Implement Idea
          </Button>
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <Button
            variant="contained"
            type="submit"
            size="lg"
            //onClick={handleSubmit}
          >
            {" "}
            Ship Idea
          </Button>
        </FormControl>
      </Form>
    </div>
  );
};

export default OpenIdeaForm;
