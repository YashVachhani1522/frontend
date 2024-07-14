import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Authentication/login/Login";
import FirstPageWelcome from "../layouts/header/FirstPageWelcome";
import Forgetpassword from "../pages/Authentication/forgetpassword/Forgetpassword";
import Registation from "../pages/Authentication/registration/Registation";
import Header from "../layouts/header/Header";

const MainComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<FirstPageWelcome/>} />
          </Route>
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Registation />} />
          <Route path="forget-password" element={<Forgetpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default MainComponent;