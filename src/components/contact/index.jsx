import React from "react";
import Header from "./Header";
import AddShops from "./AddShops";

//props = datas: datas, setDatas: setDatas

const ContactPage = (props) => {
  return (
    <>
      <Header />
      <AddShops {...props} />
    </>
  );
};

export default ContactPage;
