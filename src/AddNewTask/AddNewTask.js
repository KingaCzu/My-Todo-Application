import React, { useState } from "react";

function AddNewTask(props) {

    const [taskText, setTaskText] = useState("");

    const [date, setDate] = useState("2020-03-29");

    const [urgent, setUrgent] = useState(false);



    const handleTextChange = (event) => {

        setTaskText(event.target.value);

    }



    const handleDateChange = (event) => {

        setDate(event.target.value)

    }



    const handleUrgentChange = (event) => {

        setUrgent(event.target.checked);

    }



    const handleAddTask = () => {

        props.addNewTaskFunc(taskText, date, urgent);
    }



    return (

        <div className="row mb-3">

            <div className="col-4">

                <input type="text" className="form-control" value={taskText} onChange={handleTextChange} />

            </div>

            <div className="col-4">

                <input type="date" className="form-control" value={date} onChange={handleDateChange} />

            </div>

            <div className="col-2">

                <input type="checkbox" className="form-check-input" id="urgentCheck" checked={urgent} onChange={handleUrgentChange} />

                <label className="form-check-label" htmlFor="urgentCheck">
                     Urgent

        </label>

            </div>

            <div className="col-2">

                <button className="btn btn-primary" onClick={handleAddTask}>Add</button>

            </div>
                         
        </div>

    );

}



export default AddNewTask;