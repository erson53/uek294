import React, { useState, useEffect } from "react";
import { ListItem, TableCell, Typography } from "@mui/material";
import "../templates/css/ShowTask.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ShowTask({ tasks }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const changeData = (id) => {
    window.location.reload();
    fetch("http://localhost:3000/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
      }),
    }).then(alert("succesfuly"));
  };

  const [show, setShow] = useState(false);

  function deleteTask(id) {
    return () => {
      window.location.reload();
      fetch("http://localhost:3000/task/" + id, {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
        },
      });
    };
  }

  return (
    <div className="centerTable">
      <div className="tableContainer">
        <Typography className="showTaskTitle" variant="h5">
          Your Tasks:
        </Typography>
        <div className="editButtonContainer">
          <Button onClick={() => setShow(true)}>Edit</Button>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => {
              return (
                <TableRow>
                  <TableCell>{task.id}</TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.completed ? "✅" : "❌"}</TableCell>
                  <TableCell>
                    <Button onClick={deleteTask(task.id)}>Delete</Button>
                  </TableCell>

                  <TableBody>
                    <div id="editInput">
                      {show ? (
                        <>
                          <div>
                            <TextField
                              className="editTextField"
                              onChange={handleChange}
                              label="Edit Name:"
                              variant="standard"
                              type="text"
                            ></TextField>
                          </div>
                          <div>
                            <Button onClick={() => changeData(task.id)}>
                              Update
                            </Button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </TableBody>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ShowTask;
