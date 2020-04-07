import React, { useState } from "react";
import './App.css';
import Header from "./Header/Header";
import AddNewTask from "./AddNewTask/AddNewTask";
import Task from "./Task/Task"
import TaskCount from "./TaskCount/TaskCount"



function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Go for a walk",
      completed: true,
      dueDate: "2020-04-10",
      urgent: false,
      id: 1
    },
    {
      text: "Cook dinner",
      completed: false,
      dueDate: "2020-04-10",
      urgent: true,
      id: 2
    },

    {
      text: "Study Java Script",
      completed: true,
      dueDate: "2020-04-10",
      urgent: false,
      id: 3
    },
    {
      text: "Walk the dog",
      completed: false,
      dueDate: "2020-04-10",
      urgent: false,
      id: 4
    }
  ]);
    const deleteTask = id => {
    const filteredTasks = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  };
    const markTaskComplete = (id) => {
      const newTasks = tasks.map(task => {
        if (task.id === id) {
          task.completed = true;
        }
        return task;
      });
      setTasks(newTasks);
    }
    const addNewTask = (text, date, urgent) => {
      const newTask = {
        text: text,
        dueDate: date,
        urgent: urgent,
        completed: false,
        id: Math.random() * 1000,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
    }
  

  return (
    <div className="App">
      <Header/>
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

                text={task.text}

                urgent={task.urgent}

                completed={task.completed}

                dueDate={task.dueDate}

                id={task.id}

              />

            );

          })}

        </div>

      </main>

    </div>

  );

}

export default App;
