import React, { useState } from "react";
import ListTask from "./pages/ListTask";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router";
import TaskDetail from "./pages/TaskDetail";
import ProtectRoute from "./components/ProtectRoute";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login isLogin={isLogin} handleLogin={handleLogin} />}
        />
        <Route
          path="/list_task"
          element={
            <ProtectRoute isLogin={isLogin}>
              <ListTask />
            </ProtectRoute>
          }
        />
        <Route
          path="/list_task/:taskId"
          element={
            <ProtectRoute isLogin={isLogin}>
              <TaskDetail />
            </ProtectRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
