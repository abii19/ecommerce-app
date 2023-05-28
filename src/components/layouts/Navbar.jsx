import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "../../assets/icons";

const routes = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className={`${location.pathname === "/" ? "bg-primary" : ""} `}>
        <div className="container py-[38px] flex justify-center relative">
          <ul className="flex gap-x-[75px]">
            {routes.map((route) => {
              return (
                <li key={route.name}>
                  <Link
                    className="text-body text-content-primary"
                    to={route.path}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="absolute right-0">
            <div className="flex items-center gap-x-10">
              <Icons.AccountIcon className=" text-content-primary cursor-pointer hover:text-content-secondary" />
              <Icons.SearchIcon className=" text-content-primary cursor-pointer hover:text-content-secondary" />
              <Icons.HeartIcon className=" text-content-primary cursor-pointer hover:text-content-secondary" />
              <Icons.CartIcon className=" text-content-primary cursor-pointer hover:text-content-secondary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
