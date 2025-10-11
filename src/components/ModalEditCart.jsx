import React, { useRef, useEffect } from "react";
import { taskStatus } from "../constant";

const ModalEditCart = (props) => {
  // const findTask = {};

  const titleField = useRef("");
  const descriptionField = useRef("");
  const statusField = useRef("");

  useEffect(() => {
    const findTask = props.listTask.find((e) => {
      return e.id === props.idCart;
    });

    if (findTask) {
      titleField.current.value = findTask.title;

      descriptionField.current = findTask.description;

      // console.log(titleField.current);
    }

    return () => {};
  }, []);

  const onChangeDes = (e) => {
    const value = e.target.value;

    descriptionField.current = value;
  };

  const onChangeStatus = (e) => {
    const value = e.target.value;

    statusField.current = value;
  };

  const onSubmit = () => {
    const task = {
      title: titleField.current.value,
      description: descriptionField.current,
      statusId: statusField.current,
    };

    fetch(`http://localhost:3000/tasks/${props.idCart}`, {
      method: "PUT",
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

      <h1>Edit Task</h1>

      <div className="form">
        {/* field Title */}
        <div className="input">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={titleField} />
        </div>

        <div className="input">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" onChange={onChangeDes} />
        </div>

        <select name="status" id="" onChange={onChangeStatus}>
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

export default ModalEditCart;
