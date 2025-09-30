import React from "react";
import Cart from "../components/Cart";

const ColumnItems = ({ listTask, name, statusId, className, onOpenModal }) => {
  const filterTask = listTask.filter((task) => task.statusId == statusId);

  return (
    <div className={`col ${className || ""}`}>
      <div className="headerCol">
        <div className="leftContent">
          <h3>{name}</h3>
          <p>{filterTask.length}</p>
        </div>

        <div className="rightContent">
          <span>+</span>
          <span>...</span>
        </div>
      </div>

      <div className="listCart">
        {filterTask.map((task) => {
          return (
            <Cart
              title={task.title}
              description={task.description}
              id={task.id}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColumnItems;
