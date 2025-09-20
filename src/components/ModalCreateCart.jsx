import React from "react";
import { taskStatus } from "../constant";

const ModalCreateCart = (props) => {
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
          <input type="text" id="title" />
        </div>

        <div className="input">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" />
        </div>

        {/* list dropdown */}

        <select name="status" id="">
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
        <button>Save</button>
      </div>
    </div>
  );
};

export default ModalCreateCart;
