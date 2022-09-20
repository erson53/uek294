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
      })
      .then(() => setShowMessage(true));
  };

  const [showMeassage, setShowMessage] = useState(false);

  return (
    <div className="AddTaskContainer">
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Create Task:</Typography>
        <TextField
          label="Task Name:"
          variant="standard"
          type="text"
          name="title"
          id="titleInput"
          onFocus={() => setShowMessage(false)}
          onChange={handleChange}
        />
        <div className="SubmitButtonContainer">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <div>
        {showMeassage ? (
          <>
            <Typography color="primary" size='small'>Your Task was created!</Typography>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default AddTask;
