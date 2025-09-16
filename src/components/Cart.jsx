import React from "react";

const Cart = (task) => {
  return (
    <div className="CartItem" key={task.id}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>

      <div>
        <button>MindX School</button>
      </div>
    </div>
  );
};

export default Cart;
