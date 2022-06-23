import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConfirmLogin from "../pages/ConfirmLogin";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<ConfirmLogin />} path="/confirm-login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
