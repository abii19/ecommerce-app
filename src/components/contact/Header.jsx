import React from "react";
import * as Images from "../../assets/images";

const Header = () => {
  return (
    <>
      <div className="shop-header pt-14 pb-24 flex flex-col items-center justify-center">
        <img src={Images.MenbelLogo} alt="" className="pb-1 h-20 w-20" />
        <h3 className="text-subtitle pb-0.5">Add Shops</h3>
        <p className="text-body">Home / Add Shops</p>
      </div>
    </>
  );
};

export default Header;
