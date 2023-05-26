import React from "react";
import * as Icons from "../../assets/icons";
import { Link } from "react-router-dom";

export const BlogsCard = (props) => {
  const { src, title, path, createdAt } = props;

  const createdDate = () => {
    const date = new Date(createdAt * 1000);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
  };

  return (
    <>
      <div className="">
        <img src={src} alt="" className="w-full h-[394px] mb-8" />
        <div className="text-center mb-5">
          <p className="text-caption justify-center text-content-primary mb-2.5">
            {title}
          </p>
          <Link
            to={path}
            className="text-subtitle text-content-primary pb-2.5 border-b border-content-primary "
          >
            Read More
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Icons.ClockIcon />
            {createdAt}
          </div>
          <div className="flex items-center gap-2">
            <Icons.CalenderIcon />
            {createdDate()}
          </div>
        </div>
      </div>
    </>
  );
};
