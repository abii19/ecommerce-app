import React from "react";
import * as Images from "../../assets/images";
import ShopItemsCard from "../shared/ShopItemsCard";

const shopItems = [
  {
    id: 1,
    image: Images.Sofa1,
    title: "Trenton modular sofa_3",
    price: 25000
  },
  {
    id: 2,
    image: Images.DiningTable,
    title: "Granite dining table with dining chair",
    price: 25000
  },
  {
    id: 3,
    image: Images.OutdoorBarTable,
    title: "Outdoor bar table and stool",
    price: 25000
  },
  {
    id: 4,
    image: Images.ConsoleMirror,
    title: "Plain console with teak mirror",
    price: 25000
  }
];
const ShopItems = () => {
  return (
    <>
      <div className="container">
        <div className="mt-16 grid grid-cols-4 gap-8 pb-16">
          {shopItems.map((item) => {
            return (
              <ShopItemsCard
                key={item.id}
                src={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopItems;
