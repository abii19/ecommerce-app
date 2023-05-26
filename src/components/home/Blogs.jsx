import React from "react";
import * as Images from "../../assets/images";

import { BlogsCard } from "../shared";

const blogsArray = [
  {
    id: 1,
    image: Images.Blog1,
    title: "Going all-in with millennial design",
    path: "/",
    createdAt: 1685102912
  },
  {
    id: 2,
    image: Images.Blog2,
    title: "Going all-in with millennial design",
    path: "/",
    createdAt: 1685102912
  },
  {
    id: 3,
    image: Images.Blog3,
    title: "Going all-in with millennial design",
    path: "/",
    createdAt: 1685102912
  }
];

const Blogs = () => {
  return (
    <>
      <div className="container py-14">
        <h3 className="text-title text-content-primary text-center">
          Our Blogs
        </h3>
        <p className="text-body text-content-secondary text-center ">
          Find a bright ideal to suit your taste with our great selection
        </p>
        <div className="mt-16 grid grid-cols-3 gap-8">
          {blogsArray.map((blog) => {
            return (
              <BlogsCard
                key={blog.id}
                src={blog.image}
                title={blog.title}
                path={blog.path}
                createdAt={blog.createdAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
