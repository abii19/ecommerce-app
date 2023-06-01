import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import ShopPage from "./components/shop";
import Layout from "./components/layouts/Layout";
import ContactPage from "./components/contact";

const App = () => {
  const [datas, setDatas] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage datas={datas} />} />
          <Route path="/shop" element={<ShopPage datas={datas} />} />
          <Route
            path="/contact"
            element={<ContactPage datas={datas} setDatas={setDatas} />}
          />
          <Route path="*" element={<>Page Not Found</>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
