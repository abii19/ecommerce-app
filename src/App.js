import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import ShopPage from "./components/shop";
import Layout from "./components/layouts/Layout";
import ContactPage from "./components/contact";
import axios from "axios";

const App = () => {
  const [datas, setDatas] = useState([]);

  const fetchShopsItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/shops`);
      console.log(response.data);
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShopsItems();
  }, []);

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
