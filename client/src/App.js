import React from "react";
import "./App.css";
import BookLighter from "./component/page/book-lighter";
import BookDetail from "./component/page/book-detail";
import Home from "./component/page/home";
import User from "./component/page/user";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  useParams
} from "react-router-dom";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import BookCategory from "./component/page/category-book";
import Review from "./component/layout/review";

function App() {
  // let { bookId } = useParams()
  
  return (
    <>
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
        <Route exact path="/" render={() => <Home />}/>
        <Route  path="/user/:userID" render={() => <User />} />
        <Route  path="/category" render={() => <BookCategory categoryName="History" />}/>
        <Route  exact path="/book" render={() => <BookLighter />} />
        <Route path="/book/:bookId" render={() => <BookDetail /> } />
        <Route path="/review" render={() => <Review /> } />
      </Switch>
      <Footer />
    </>

    //
  );
}

export default App;
