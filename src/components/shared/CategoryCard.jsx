import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = (props) => {
  const { src, title, path } = props;
  return (
    <>
      <div>
        <img src={src} alt={title} className="w-auto h-[370px]" />
        <div className="pl-14">
          <h4 className="text-title pb-6">{title}</h4>
          <Link to={path} className="text-subtitle link-btn">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};
