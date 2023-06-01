import React from "react";

const ShopItemsCard = (props) => {
  const { src, title, price, width } = props;
  return (
    <>
      <div>
        {src && (
          <img
            src={URL.createObjectURL(src)}
            alt={title}
            className="w-auto h-[280px] object-contain"
            style={{ width: `${width || 0}px` }}
          />
        )}
        <h4 className="text-body font-normal pb-2.5">{title}</h4>
        <p className="text-subtitle">Rs.{price.toLocaleString("en-US")}</p>
      </div>
    </>
  );
};

export default ShopItemsCard;
