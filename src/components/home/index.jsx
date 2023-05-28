import React from "react";
import Categories from "./Categories";
import Blogs from "./Blogs";
import Header from "./Header";
import TopPicks from "./TopPicks";

const HomePage = () => {
  return (
    <>
      <Header />
      <Categories />
      <TopPicks />
      <Blogs />
    </>
  );
};

export default HomePage;
