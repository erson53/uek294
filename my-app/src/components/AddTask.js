import * as React from "react";
import TextField from "@mui/material/TextField";
import "../templates/css/AddTask.css";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState } from "react";

function AddTask() {
  return (
    <div className="AddTaskContainer">
        <Typography variant="h5">Create Task</Typography>
      <div className="InputNameContainer">
        <TextField id="standard-basic" label="Task Name:" variant="standard" />
      </div>
      <div className="SubmitButtonContainer">
        <Button variant="text">Submit</Button>
      </div>
    </div>
  );
}

export default AddTask;
