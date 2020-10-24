import React from "react";

const LinktoBook = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb text-center text-lg-left">
        <li className="breadcrumb-item">
          <a href="javascript:void(0)">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="javascript:void(0)">Categories</a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <a href="javascript:void(0)">Books</a>
        </li>
        <li className="breadcrumb-item">
          <a className="active" href="javascript:void(0)">
            The Road
          </a>
        </li>
      </ol>
    </nav>
  );
};

const BookImg = () => {
  return (
    <>
      <div className="wrapper">
        <div
          className="Gallery swiper-container img-magnifier-container"
          id="gallery"
        >
          <div className="swiper-wrapper myimgs">
            <div className="swiper-slide">
              {" "}
              <a href="img\book-1-1.jpg" data-fancybox={1} title="Zoom In">
                <img className="myimage" src="img\book-1-1.jpg" alt="gallery" />
              </a>
            </div>
            <div className="swiper-slide">
              {" "}
              <a href="img\book-1.jpg" data-fancybox={2} title="Zoom In">
                <img className="myimage" src="img\book-1.jpg" alt="thumnails" />
              </a>
            </div>
            <div className="swiper-slide">
              {" "}
              <a href="img\book-1-2.jpg" data-fancybox={3} title="Zoom In">
                <img
                  className="myimage"
                  src="img\book-1-2.jpg"
                  alt="thumnails"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="Thumbs swiper-container" id="thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {" "}
              <img src="img\book-1-1.jpg" alt="thumnails" />
            </div>
            <div className="swiper-slide">
              {" "}
              <img src="img\book-1.jpg" alt="thumnails" />
            </div>
            <div className="swiper-slide">
              {" "}
              <img src="img\book-1-2.jpg" alt="thumnails" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BookInfor = (props) => {
  return (
    <div className="row product-list product-detail">
      <div className="col-12 col-lg-6 product-detail-slider">
        <BookImg />
      </div>
      <div className="col-12 col-lg-6 text-center text-lg-left">
        <h1> Name</h1>

        <div className="dropdown-divider" />
        <div className="product-tags-list">
          <nav aria-label="breadcrumb">
            <ol>
              <li>
                <p className="d-inline">
                  SKU: <span>00012</span>
                </p>
              </li>
              <li>
                <p className="d-inline">
                  Author: <span>00012</span>
                </p>
              </li>
              <li>
                <p className="d-inline">
                  Publisher: <span>00012</span>
                </p>
              </li>
              <li>
                <span className="d-inline">
                  Categories: <a href="javascript:void(0)">Classic</a>
                  <span className="comma-separtor">,</span>
                  <a href="javascript:void(0)">Fantasy</a>
                </span>
              </li>
            </ol>
          </nav>
        </div>
        {/* share area */}
        <div className="share-product-details">
          <ul className="share-product-icons">
            <li>
              <p>Share Link:</p>
            </li>
            <li>
              <a href="javascript:void(0)" className="facebook-bg-hvr">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="twitter-bg-hvr">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>{" "}
            </li>
            <li>
              <a href="javascript:void(0)" className="linkedin-bg-hvr">
                <i className="fab fa-linkedin-in" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="instagram-bg-hvr">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="row book-detail-button">
          <div className="col-6">
            <button type="button" class="btn btn-outline-danger ">
              <i class="lni lni-heart"></i> Add to favourite
            </button>
          </div>
          <div className="col-6">
            <button type="button" class="btn btn-outline-dark ">
              <i class="fas fa-user-edit"></i> Write down your feeling
            </button>
          </div>{" "}
        </div>
      </div>
      <div className="col-12 mt-4 mb-4">
        <div className="row no-gutters product-all-details">
          <ul className="col-12 nav nav-tabs" id="myTab" role="tablist">
            <li className="col-6 nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Project Description
              </a>
            </li>

            <li className="col-6 nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Customer Reviews
              </a>
            </li>
          </ul>

          <div className="col-12 tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <p className="product-tab-description text-center text-lg-left">
                If you are a small business and you are interested in small
                rebranding then this is a perfect plan for you, having Five
                years experience in Blogging, photographing, Disgning and love
                to cycling,Writting,Singing and Traveling around the world
              </p>
              <p className="product-tab-description text-center text-lg-left">
                If you are a small business and you are interested in small
                rebranding then this is a perfect plan for you, having Five
                years experience in Blogging, photographing, Disgning and love
                to cycling,Writting,Singing and Traveling around the world
              </p>
            </div>

            <div
              className="tab-pane fade reviews"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="media">
                <div className="row no-gutter">
                  <div className="col-12 col-lg-2 p-0">
                    <div className="row no-gutters">
                      <div className="col-12 d-flex  justify-content-center">
                        <img
                          src="img\user.jpg"
                          alt="Generic placeholder image"
                        />
                      </div>
                      <div className="col-12 d-flex mt-2 justify-content-center">
                        <ul className="user-rating">
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-10 p-0">
                    <div className="media-body">
                      <span className="text-center text-lg-left d-block">
                        27 Aug 2017
                      </span>
                      <h5 className="mb-2 text-center text-lg-left">
                        Media heading
                      </h5>
                      <p className="text-center text-lg-left">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="row no-gutter">
                  <div className="col-12 col-lg-2 p-0">
                    <div className="row no-gutters">
                      <div className="col-12 d-flex  justify-content-center">
                        <img
                          src="img\user2.jpg"
                          alt="Generic placeholder image"
                        />
                      </div>
                      <div className="col-12 d-flex mt-2 justify-content-center">
                        <ul className="user-rating">
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-10 p-0">
                    <div className="media-body ">
                      <span className="text-center text-lg-left d-block">
                        27 Aug 2017
                      </span>
                      <h5 className="mb-2 text-center text-lg-left">
                        Media heading
                      </h5>
                      <p className="text-center text-lg-left">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pl-2 pr-2">
                <div className="col-12 d-flex mb-4 mt-3">
                  <h5 className="text-nowrap">Add Review</h5>
                  <hr className="w-100 ml-5" />
                </div>
                <div className="col-12">
                  <form className="getin_form border-form" id="register">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group bottom35">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name*"
                            required
                            id="registerName"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div className="form-group bottom35">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email*"
                            required
                            id="registerEmail"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-2 text-center text-lg-left">
                        <h5 className="text-nowrap">Your Rating</h5>
                      </div>
                      <div className="col-12 col-lg-10 text-center text-lg-left">
                        <ul className="user-rating">
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star-filled" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="lni-star" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          {/*                                                                            <label for="comment">Your Rating:</label>*/}
                          <textarea
                            className="form-control textareaclass"
                            rows={5}
                            id="comment"
                            placeholder="Your Review"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="form-group d-flex justify-content-center d-lg-block">
                          <button className="text-center btn green-color-yellow-gradient-btn">
                            Add Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <>
      {/* START HEADING SECTION */}
      <div className="about_content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-body">
                <LinktoBook />
                <div className="pro-detail-sec row">
                  <div className="col-12">
                    <h4 className="pro-heading text-center text-lg-left">
                      Books Collections
                    </h4>
                    <p className="pro-text text-center text-lg-left">
                      <cite>
                        “A great book should leave you with many experiences,
                        and slightly exhausted at the end. You live several
                        lives while reading.”
                      </cite>
                      – William Styron
                    </p>
                  </div>
                </div>
                <BookInfor />
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default Detail;
