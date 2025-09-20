import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ColumnItems from "./components/ColumnItems";
import { tasks } from "./constant";
import ModalCreateCart from "./components/ModalCreateCart";

function App() {
  const [listTask, setListTask] = useState(tasks);

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

  return (
    <>
      <div className="container" style={{ padding: "8px" }}>
        <div className="header">
          <input type="text" onChange={onChange} placeholder="Search" />
          <button>New Item</button>
        </div>

        <div className="mainContent">
          <ColumnItems listTask={listTask} name={"To Do"} statusId={1} />

          <ColumnItems listTask={listTask} name={"In Process"} statusId={2} />

          <ColumnItems listTask={listTask} name={"In Preview"} statusId={3} />

          <ColumnItems listTask={listTask} name={"Done"} statusId={4} />
        </div>
      </div>

      <ModalCreateCart />
    </>
  );
}

export default App;
