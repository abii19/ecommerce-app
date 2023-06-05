import React from "react";

const ShopItemsCard = (props) => {
  const { src, title, price } = props;
  return (
    <>
      <div>
        {src && (
          <img
            src={src}
            alt={title}
            className="w-auto h-[280px] object-contain"
          />
        )}
        <h4 className="text-body font-normal pb-2.5">{title}</h4>
        <p className="text-subtitle">Rs.{price.toLocaleString("en-US")}</p>
      </div>
    </>
  );
};

export default ShopItemsCard;
