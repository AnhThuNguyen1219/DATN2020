import React from "react";
import "./App.css";
import BookDetail from "./component/page/book-detail";
import Home from "./component/page/home";
import User from "./component/page/user";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import BookCategory from "./component/page/category-book";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <a className="scroll-top-arrow" href="javascript:void(0);">
            <i className="fa fa-angle-up" />
          </a>
          {/*LOADER*/}
          <div className="loader">
            <div className="loader-spinner" />
          </div>
        </div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Home />
              </div>
            )}
          />
          <Route exact path="/user" render={() => <User />} />
          <Route exact path="/category" render={() => <BookCategory categoryName="History"/>} />
          <Route exact path="/book" render={() => <BookDetail />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    //
  );
}

export default App;
