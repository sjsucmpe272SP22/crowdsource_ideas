import React from "react";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const AddIdeaForm = () => {
  const handleSubmit = () => {};
  //   const [age, setAge] = useState("");

  const handleChange = () => {};
  return (
    <div>
      <Form>
        <FormControl fullWidth>
          <TextField id="filled-basic" label="Filled" variant="outlined" />
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem>CMPE 272</MenuItem>
          </Select>
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <TextField id="filled-basic" label="Filled" variant="outlined" />
        </FormControl>
        <hr />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
