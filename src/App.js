import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import ShopPage from "./components/shop";
import Layout from "./components/layouts/Layout";
import ContactPage from "./components/contact";
import { fetchShopsItems } from "./components/utils/shopsApiActions";
import ShopDetails from "./components/shop/ShopDetails";

const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // (async () => {
    //   const data = await fetchShopsItems();
    //   console.log(data);
    //   setDatas(data);
    // })();
    fetchShopsItems(setDatas);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage datas={datas} />} />
          <Route path="/shop">
            <Route index element={<ShopPage datas={datas} />} />
            <Route path=":shopId" element={<ShopDetails />} />
          </Route>
          <Route
            path="/contact"
            element={<ContactPage datas={datas} setDatas={setDatas} />}
          />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
