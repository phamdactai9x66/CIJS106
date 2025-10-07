import React from "react";
import ListTask from "./pages/ListTask";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListTask />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
