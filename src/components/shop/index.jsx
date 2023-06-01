import React from "react";
import Header from "./Header";
import ShopItems from "./ShopItems";

const ShopPage = ({ datas }) => {
  return (
    <>
      <Header />
      <ShopItems datas={datas} />
    </>
  );
};

export default ShopPage;
