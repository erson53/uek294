import React, { useState, useEffect } from "react";
import ListItemText from "@mui/material/ListItemText";
import { ListItem, TableCell, Typography } from "@mui/material";
import '../templates/css/ShowTask.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function ShowTask() {
  const [post, getPost] = useState([]);
  const API = "http://localhost:3000/tasks";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getPost(res);
      });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="ShowTaskContainer">
      <Typography variant="h5">test</Typography>
      <ul>
        {post.map((item, i) => {
          return (
            <Typography variant="subtitle1" key={i}>
              {item.title}
            </Typography>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowTask;
