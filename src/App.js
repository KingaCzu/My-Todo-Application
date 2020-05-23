import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header/Header";
import AddNewTask from "./AddNewTask/AddNewTask";
import Task from "./Task/Task"
import TaskCount from "./TaskCount/TaskCount"
import axios from "axios";



function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("https://b54a2pst5h.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        console.log("Success", response.data);
        setTasks(response.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);



  const deleteTask = id => {
    axios.delete(`https://b54a2pst5h.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
      .then(response => {
        const filteredTasks = tasks.filter(task => {
          return task.taskID !== id;
        });
        setTasks(filteredTasks);
      })
      .catch(err => {
        console.log("API Error", err);
      });
  };


  const markTaskComplete = (id) => {
    axios
      .put(

        `https://b54a2pst5h.execute-api.eu-west-1.amazonaws.com/dev/tasks//${id}`, {
        Completed: true
      }
      )
      .then((response) => {
        const newTasks = tasks.map((task) => {
          if (task.taskID === id) {
            task.completed = 1;
          }
          return task;
        });
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log("Error updating Task", err);
      });
  }

  const addNewTask = (narrative, date, urgency) => {


    axios.post("https://b54a2pst5h.execute-api.eu-west-1.amazonaws.com/dev/tasks", {

      narrative: narrative,

      date: date,

      urgency: urgency

    })

      .then(response => {
        const newTask = response.data;
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
      })
      .catch(err => {
        console.log("Error creating task", err);
      });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount count={tasks.length} />
        <div className="container">
          <AddNewTask addNewTaskFunc={addNewTask} />
          {tasks.map(task => {
            return (

              <Task

                key={task.id}

                deleteTaskFunc={deleteTask}

                markCompleteFunc={markTaskComplete}

                text={task.narrative}

                urgent={task.urgency}

                completed={task.completed}

                date={task.date}

                id={task.taskID}

              />

            );

          })}

        </div>

      </main>

    </div>

  );

}

export default App;
