import React from "react";
import ListTask from "./pages/ListTask";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import TaskDetail from "./pages/TaskDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListTask />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my_profile" element={<MyProfile />} />
        <Route path="/task/:taskId" element={<TaskDetail />} />
      </Routes>
    </>
  );
};

export default App;
