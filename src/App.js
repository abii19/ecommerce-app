import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
