import React from "react";
import { Route, Switch } from "react-router-dom";
import Banner from "../layout/banner";
import Footer from "../layout/footer";
import Header from "../layout/header";
import ListBooks from "../layout/list_book";
import BookDetail from "./book-detail";
import User from "./user";

const Home = () => {
  return (
    <>
      <Banner />
      <ListBooks />
    </>
  );
};
export default Home;
