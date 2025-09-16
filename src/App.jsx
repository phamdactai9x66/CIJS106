import "./App.css";
import Cart from "./components/Cart";
import ColumnItems from "./components/ColumnItems";
import { tasks } from "./constant";

function App() {
  return (
    <div className="container" style={{ padding: "8px" }}>
      <div className="header">
        <input type="text" placeholder="Search" />
        <button>New Item</button>
      </div>

      <div className="mainContent">
        <ColumnItems listTask={tasks} name={"To Do"} statusId={1} />

        <ColumnItems listTask={tasks} name={"In Process"} statusId={2} />

        <ColumnItems listTask={tasks} name={"In Preview"} statusId={3} />

        <ColumnItems listTask={tasks} name={"Done"} statusId={4} />
      </div>
    </div>
  );
}

export default App;
