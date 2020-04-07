import React from "react";

import "./Task.css";



const Task = props => {

 
  const handleDeleteClick = () => {

    props.deleteTaskFunc(props.id);

  };



  const handleCompleteClick = () => {

    props.markCompleteFunc(props.id);

  };



  return (

    <div className="row taskRow">

      <div className="col-12 col-md-4">{props.text}</div>

      <div className="col-6 col-md-2">

        {props.urgent === true ? "CRITICAL" : ""}

      </div>

     

      <div className="col-6 col-md-2">

        {props.completed === false && (

          <button className="btn btn-success" onClick={handleCompleteClick}>

            Completed

          </button>

        )}

      </div>

      <div className="col-6 col-md-2">

        <button className="btn btn-danger" onClick={handleDeleteClick}>

          Delete

        </button>

      </div>

    </div>

  );

};



export default Task;