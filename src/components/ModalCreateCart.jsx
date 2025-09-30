import React, { useState } from "react";
import { taskStatus } from "../constant";

const ModalCreateCart = (props) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [status, setStatus] = useState("");
  const onChangeTitle = (e) => {
    const value = e.target.value;

    setTitle(value);
  };

  const onChangeDes = (e) => {
    const value = e.target.value;

    setDes(value);
  };

  const onChangeStatus = (e) => {
    const value = e.target.value;

    setStatus(value);
  };

  const onSubmit = () => {
    const task = {
      // taskId: Date.now(),
      title: title,
      description: des,
      statusId: status,
    };

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // props.handleEditTask(task);
  };

  return (
    <div className="modalCreateCart">
      <div className="iconClose" onClick={props.onCloseModal}>
        X
      </div>

      <h1>Save Task</h1>

      <div className="form">
        {/* field Title */}
        <div className="input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            id="title"
          />
        </div>

        <div className="input">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={des}
            onChange={onChangeDes}
          />
        </div>

        <select name="status" id="" value={status} onChange={onChangeStatus}>
          {taskStatus.map((e) => {
            return (
              <option value={e.statusId} key={e.statusId}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="btn">
        <button>Cancel</button>
        <button onClick={onSubmit}>Save</button>
      </div>
    </div>
  );
};

export default ModalCreateCart;
