import React from "react";
import * as Images from "../../assets/images";
import { useSelector } from "react-redux";

const Header = () => {
  const { value } = useSelector((state) => state.datas);
  console.log(value);
  return (
    <>
      <div className="shop-header pt-14 pb-24 flex flex-col items-center justify-center">
        <img src={Images.MenbelLogo} alt="" className="pb-1 h-20 w-20" />
        <h3 className="text-subtitle pb-0.5">Shop</h3>
        <p className="text-body">Home / Shop</p>
        {value}
      </div>
    </>
  );
};

export default Header;
