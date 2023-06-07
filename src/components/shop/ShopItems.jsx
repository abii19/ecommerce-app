import React from "react";
import ShopItemsCard from "../shared/ShopItemsCard";

//[{image:'', title: '', price: '', details: '', id: ''}]
const ShopItems = ({ datas }) => {
  return (
    <>
      <div className="container">
        <div className="mt-16 grid grid-cols-4 gap-8 pb-16">
          {datas.map((item) => {
            return (
              <ShopItemsCard
                key={item.id}
                id={item.id}
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
