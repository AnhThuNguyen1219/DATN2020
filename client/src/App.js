import React from "react";
import "./App.css";
import BookDetail from "./component/page/book-detail";
import Home from "./component/page/home";

function App() {
  return (
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
      <BookDetail/>
    </div>
  );
}

export default App;
