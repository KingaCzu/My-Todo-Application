import React from "react";

function TaskItem(props) {
  return (
    <div className="row pb-3 mb-3">
      <div className="col-3">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default TaskItem;