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
      <div className="bg-secondary">
        <div className="container py-14">
          <div className="grid grid-cols-2 gap-4">
            {categoriesArray.map((category, index) => {
              const { image, title, path } = category;
              return (
                <CategoryCard
                  key={index}
                  src={image}
                  title={title}
                  path={path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
