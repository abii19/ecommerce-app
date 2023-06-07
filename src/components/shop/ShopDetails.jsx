import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchShopsItemsById } from "../utils/shopsApiActions";

const ShopDetails = () => {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const [detailsData, setDetailsData] = useState(null);

  useEffect(() => {
    if (shopId) {
      (async () => {
        const response = await fetchShopsItemsById(shopId);
        console.log(response);
        // if (response.message === "success") setDetailsData(response.data);
        // else navigate("*");
        if (response === undefined) navigate("*");
        else setDetailsData(response);
      })();
    }
    // eslint-disable-next-line
  }, [shopId]);

  if (!detailsData) return null;
  return (
    <>
      <div className="container">
        <div>
          {detailsData.image && (
            <img
              src={detailsData.image}
              alt={detailsData.title}
              className="w-auto h-[280px] object-contain"
            />
          )}
          <h4 className="text-body font-normal pb-2.5">{detailsData.title}</h4>
          <p className="text-subtitle">
            Rs.{detailsData.price.toLocaleString("en-US")}
          </p>
          <p>{detailsData.details}</p>
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
