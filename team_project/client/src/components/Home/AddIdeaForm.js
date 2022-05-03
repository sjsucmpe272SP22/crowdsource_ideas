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
// import { useNavigate } from "react-router-dom";

const AddIdeaForm = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let currentDate = `${year}${"-"}${
    month < 10 ? `0${month}` : `${month}`
  }${"-"}${date}`;

  // const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    workspace: "",
    name: "",
    description: "",
    category: "",
    date: currentDate,
    status: "AlreadyExists",
    votes: 0,
  });

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(formValue);
    axios.post(API + "/dashboard/createIdea", { idea: formValue });
  };

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <Form>
        <FormControl fullWidth>
          <TextField
            id="filled-basic"
            label="Name"
            variant="outlined"
            value={formValue.name}
            onChange={handleChange}
            name="name"
          />
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Workspace</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="workspace"
            value={formValue.workspace}
            onChange={handleChange}
            label="Workspace"
          >
            <MenuItem value={"CMPE 272"}>CMPE 272</MenuItem>
          </Select>
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <TextField
            id="filled-basic"
            label="Description"
            variant="outlined"
            value={formValue.description}
            onChange={handleChange}
            name="description"
          />
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formValue.category}
            label="Category"
            onChange={handleChange}
            name="category"
          >
            <MenuItem value={"Category 1"}>Category 1</MenuItem>
            <MenuItem value={"Category 2"}>Category 2</MenuItem>
            <MenuItem value={"Category 3"}>Category 3</MenuItem>
          </Select>
        </FormControl>
        <div>
          <br />
          <Button
            variant="contained"
            type="submit"
            size="lg"
            onClick={handleSubmit}
          >
            Create Idea
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddIdeaForm;
