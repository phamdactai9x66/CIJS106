import React from "react";

const ModalCreateCart = (props) => {
  return (
    <div className="modalCreateCart">
      <div className="iconClose" onClick={props.onCloseModal}>
        X
      </div>
    </div>
  );
};

export default ModalCreateCart;
