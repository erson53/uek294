import { useEffect } from "react";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";
import ShowTask from "./components/ShowTask";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const createTask = (task)=> {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <Navbar/>
      <AddTask saveTask={createTask}/>
      <ShowTask tasks={tasks}/>
    </div>
  );
}

export default App;
