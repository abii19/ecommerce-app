import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import ShopPage from "./components/shop";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="*" element={<>Page Not Found</>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
