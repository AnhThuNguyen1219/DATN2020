import React from "react";
import ListBooks from "../layout/list_book";

const Category = (props) => {
  return <></>;
};

const SideCategory = (props) => {
  return (
    <>
      {/* START STICKY NAV */}
      <div className=" col-lg-4 order-2 order-lg-1 sticky">
        <div id="product-filter-nav" className="product-filter-nav mb-3">
          <div className="product-category">
            <h5 className="filter-heading  text-center text-lg-left">
              Category
            </h5>
            <ul> Big Category
              <li>
                <a href="javascript:void(0)">Small Category </a>
                <span>(2)</span>
              </li>
            </ul>

            <ul> Big Category
              <li>
                <a href="javascript:void(0)">Small Category </a>
                <span>(2)</span>
              </li>
            </ul>
          </div>
          <button className="btn yellow-color-green-gradient-btn mt-1">
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

const BookCategory = (props) => {
  return (
    <>
      <section id="slider-sec" className="slider-sec parallax"></section>
      <div className="product-listing">
        <div className="container">
          <div className="row no-gutters">
            <SideCategory />
            {/* START PRODUCT COL 8 */}
            <div className="col-md-12 col-lg-8 order-1 order-lg-2">
              <div className="row">
                {/* START LISTING HEADING */}
                <div className="col-12 product-listing-heading">
                  <h1 className="heading text-left">{props.categoryName}</h1>
                  <p className="para_text text-left">
                    {props.categoryDefine}
                  </p>
                </div>
                {/* END LISTING HEADING */}
                {/* START PRODUCT LISTING SECTION */}
                <div className="col-12 product-listing-products">
                  {/* START DISPLAY PRODUCT */}
                  <ListBooks/>
                  {/* END DISPLAY PRODUCT */}
                </div>
                {/* END PRODUCT LISTING SECTION */}
              </div>
            </div>
            {/* END PRODUCT COL 8 */}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookCategory;
