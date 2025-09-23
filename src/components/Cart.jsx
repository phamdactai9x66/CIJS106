import React from "react";

const Cart = (task) => {
  console.log(task);
  return (
    <div className="CartItem p-1" key={task.id}>
      <div className="headerCart flex justify-between items-center">
        <h4>{task.title}</h4>
        <div>
          <button
            className="bg-amber-200 rounded-sm p-1 hover:bg-amber-600 hover:text-white"
            onClick={task.onOpenModal}
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
