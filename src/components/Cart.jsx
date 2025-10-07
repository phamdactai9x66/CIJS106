import React from "react";
import { Link } from "react-router";

const Cart = (task) => {
  return (
    <div className="CartItem p-1" key={task.id}>
      <div className="headerCart flex justify-between items-center">
        <h4>{task.title}</h4>
        <div>
          <Link to={`/task/${task.id}`}>
            <button
              className="bg-amber-200 rounded-sm p-1 hover:bg-amber-600 hover:text-white"
              onClick={() => task.onOpenModal(task.id)}
            >
              Detail Task
            </button>
          </Link>

          <button
            className="bg-amber-200 rounded-sm p-1 hover:bg-amber-600 hover:text-white"
            onClick={() => task.onOpenModal(task.id)}
          >
            Edit
          </button>
        </div>
      </div>
      <p>{task.description}</p>

      <div>
        <button>MindX School</button>
      </div>
    </div>
  );
};

export default Cart;
