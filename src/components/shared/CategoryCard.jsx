import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = (props) => {
  const { src, title, path } = props;
  return (
    <>
      <div>
        <img src={src} alt={title} className="" />
        <h4>{title}</h4>
        <Link to={path}>View More</Link>
      </div>
    </>
  );
};
