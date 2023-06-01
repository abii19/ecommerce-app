import React from "react";
import Categories from "./Categories";
import Blogs from "./Blogs";
import Header from "./Header";
import TopPicks from "./TopPicks";

const HomePage = (props) => {
  return (
    <>
      <Header />
      <Categories />
      <TopPicks {...props} />
      <Blogs />
    </>
  );
};

export default HomePage;
