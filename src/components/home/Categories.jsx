import React from "react";
import * as Images from "../../assets/images";
import { CategoryCard } from "../shared";

const categoriesArray = [
  {
    image: Images.Table1,
    title: "Side table",
    path: "/"
  },
  {
    image: Images.Sofa1,
    title: "Side table",
    path: "/"
  }
];

const Categories = () => {
  return (
    <>
      {categoriesArray.map((category, index) => {
        const { image, title, path } = category;
        return (
          <CategoryCard key={index} src={image} title={title} path={path} />
        );
      })}
    </>
  );
};

export default Categories;
