import React from "react";
// import * as Images from "../../assets/images";
import ShopItemsCard from "../shared/ShopItemsCard";
import { Link } from "react-router-dom";

// const shopItems = [
//   {
//     id: 1,
//     image: Images.Sofa1,
//     title: "Trenton modular sofa_3",
//     price: 25000
//   },
//   {
//     id: 2,
//     image: Images.DiningTable,
//     title: "Granite dining table with dining chair",
//     price: 25000
//   },
//   {
//     id: 3,
//     image: Images.OutdoorBarTable,
//     title: "Outdoor bar table and stool",
//     price: 25000
//   },
//   {
//     id: 4,
//     image: Images.ConsoleMirror,
//     title: "Plain console with teak mirror",
//     price: 25000
//   }
// ];

const TopPicks = ({ datas }) => {
  return (
    <>
      <div className="container py-14">
        <h3 className="text-title text-content-primary text-center">
          Top Picks For You
        </h3>
        <p className="text-body text-content-secondary text-center ">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
        <div className="mt-16 grid grid-cols-4 gap-8 pb-16">
          {datas.map((item) => {
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
        <div className="flex justify-center">
          <Link to="/shop" className="text-subtitle link-btn">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
