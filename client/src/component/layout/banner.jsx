import React from "react";
const Banner = () => {
  return (
    <>
      <div className="homer-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-center text-lg-left">
              <div className="banner-description">
                <span className="small-heading animated fadeInRight delay-1s">
                  BEST AVAILABLE
                </span>
                <h1 className="w-sm-100 w-md-100 w-lg-25 animated fadeInLeft delay-1s">
                  BOOKS <span>COLLECTION</span>
                </h1>
                <a
                  href="book-shop\product-listing.html"
                  className="btn animated fadeInLeft delay-1s"
                >
                  READ AND RATE NOW{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;