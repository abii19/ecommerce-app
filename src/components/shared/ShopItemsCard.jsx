import React from "react";
import { Link } from "react-router-dom";

const ShopItemsCard = (props) => {
  const { id, src, title, price } = props;
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
        <Link to={`/shop/${id}`} className="underline mt-2">
          View Details
        </Link>
      </div>
    </>
  );
};

export default ShopItemsCard;
