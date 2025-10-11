import React, { useRef } from "react";
import { taskStatus } from "../constant";

const ModalCreateCart = (props) => {
  const titleField = useRef("");
  const descriptionField = useRef("");
  const statusField = useRef("");

  const onChangeTitle = (e) => {
    const valueInput = e.target.value;

    titleField.current = valueInput;
  };

  const onChangeDes = (e) => {
    const valueInput = e.target.value;

    descriptionField.current = valueInput;
  };

  const onChangeStatus = (e) => {
    const valueInput = e.target.value;

    statusField.current = valueInput;

    // setStatus(value);
  };

  const onSubmit = () => {
    const task = {
      // taskId: Date.now(),
      title: titleField.current,
      description: descriptionField.current,
      statusId: statusField.current,
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
    props.handleEditTask(task);
  };

  console.log("xin chao");

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
          <input type="text" onChange={onChangeTitle} id="title" />
        </div>

        <div className="input">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={onChangeDes} />
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
