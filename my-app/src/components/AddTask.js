import * as React from "react";
import TextField from "@mui/material/TextField";
import "../templates/css/AddTask.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState } from "react";

function AddTask({ saveTask }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        saveTask(data);
      });
  };
  return (
    /*<form onSubmit={handleSubmit}>
      <label for='titleInput'>Title</label>
      <input type='text' name='title' id='titleInput'
      onChange={handleChange}/>
      <button type='submit'>Save</button>
    </form>*/
    <div className="AddTaskContainer">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Create Task:</Typography>
        <TextField
          label="Task Name:"
          variant="standard"
          type="text"
          name="title"
          id="titleInput"
          onChange={handleChange}
        />
        <div className="SubmitButtonContainer">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
