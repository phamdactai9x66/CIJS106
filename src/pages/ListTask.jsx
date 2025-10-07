import { useState, useEffect } from "react";
import "./ListTask.css";
import Cart from "../components/Cart";
import ColumnItems from "../components/ColumnItems";
import { tasks } from "../constant";
import ModalCreateCart from "../components/ModalCreateCart";
import ModalEditCart from "../components/ModalEditCart";

function ListTask() {
  const [loading, setLoading] = useState(false);

  const [listTask, setListTask] = useState([]);

  const [displayModal, setDisplayModal] = useState(false);

  const [displayModalEdit, setDisplayModalEdit] = useState(false);

  const [idCart, setIdCart] = useState("");

  const onChange = (event) => {
    const value = event.target.value;

    const findItem = tasks.filter((e) => {
      // search by title
      const findTitle = e.title.toLowerCase().includes(value.toLowerCase());

      // search by description
      const findDescription = e.description
        .toLowerCase()
        .includes(value.toLowerCase());

      return findTitle || findDescription;
    });

    setListTask(findItem);
  };

  const handleApiTask = async () => {
    setLoading(true);
    const callApiTask = await fetch("http://localhost:3000/tasks");

    const data = await callApiTask.json();

    setListTask(data);
    setLoading(false);
  };

  useEffect(() => {
    handleApiTask();

    return () => {};
  }, []);

  const onOpenModal = () => setDisplayModal(true);

  const onCloseModal = () => setDisplayModal(false);

  const onOpenModalEdit = (idTask) => {
    setDisplayModalEdit(true);
    setIdCart(idTask);
  };

  const onCloseModalEdit = () => {
    setDisplayModalEdit(false);
  };

  const handleAddTask = (task) => {
    setListTask((pre) => {
      return [...pre, task];
    });

    onCloseModal();
  };

  const handleEditTask = (task) => {
    const editTask = listTask.map((e) => {
      if (e.taskId === task.taskId) {
        return { ...e, ...task };
      }

      return e;
    });

    setListTask(editTask);
    onCloseModalEdit();
  };

  return (
    <>
      <div className="container" style={{ padding: "8px" }}>
        <div className="header">
          <input type="text" onChange={onChange} placeholder="Search" />
          <button onClick={onOpenModal}>New Item</button>
        </div>

        <div className="mainContent">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <ColumnItems
                listTask={listTask}
                name={"To Do"}
                statusId={1}
                onOpenModal={onOpenModalEdit}
              />

              <ColumnItems
                listTask={listTask}
                name={"In Process"}
                statusId={2}
                onOpenModal={onOpenModalEdit}
              />

              <ColumnItems
                listTask={listTask}
                name={"In Preview"}
                statusId={3}
                onOpenModal={onOpenModalEdit}
              />

              <ColumnItems
                listTask={listTask}
                name={"Done"}
                statusId={4}
                onOpenModal={onOpenModalEdit}
              />
            </>
          )}
        </div>
      </div>

      {displayModal ? (
        <ModalCreateCart
          onCloseModal={onCloseModal}
          handleAddTask={handleAddTask}
        />
      ) : (
        ""
      )}

      {displayModalEdit ? (
        <ModalEditCart
          listTask={listTask}
          onCloseModal={onCloseModalEdit}
          handleEditTask={handleEditTask}
          idCart={idCart}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default ListTask;
