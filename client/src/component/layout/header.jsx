import React from "react";

const Categories = (props) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
        <h5 className="dropdown-title bottom10"> Big Categories </h5>
        <ul>
          <li>
            <i className="lni-angle-double-right right-arrow" />
            <a className="dropdown-item" href="book-shop\product-listing.html">
              Small categories
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const SideMenuCategories = (props) => {
  return (
    <>
      <h5 className="sub-title">Big Categories</h5>
      <ul className="navbar-nav mt-2">
        <li className="nav-item">
          <a className="nav-link" href="book-shop\product-listing.html">
            Small Categories
          </a>
        </li>
      </ul>
    </>
  );
};

const SideMenu = () => {
  return (
    <>
      {/* side menu */}
      <div className="side-menu opacity-0 gradient-bg hidden">
        <div className="inner-wrapper">
          <span
            className="btn-close btn-close-no-padding"
            id="btn_sideNavClose"
          >
            <i />
            <i />
          </span>
          <nav className="side-nav w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="book-shop\product-listing.html">
                  {" "}
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link collapsePagesSideMenu"
                  data-toggle="collapse"
                  href="#sideNavPages1"
                >
                  BOOK'S CATEGORIES <i className="fas fa-chevron-down" />
                </a>
                <div id="sideNavPages1" className="collapse sideNavPages">
                  <SideMenuCategories />
                  <SideMenuCategories />
                  <SideMenuCategories />
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book-shop\contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="side-footer w-100">
            <div className="row">
              <button type="button" className="btn btn-outline-dark col-6 sidelogin_toggle" id="log-in-btn">
                LOG IN
              </button>{" "}
              <button type="button" className="btn btn-outline-dark col-6 sidelogin_toggle " id="sign-up-btn">
                SIGN UP
              </button>
            </div>
            <ul className="social-icons-simple white top40">
              <li>
                <a className="facebook-bg-hvr" href="javascript:void(0)">
                  <i className="fab fa-facebook-f" />{" "}
                </a>{" "}
              </li>
              <li>
                <a className="twitter-bg-hvr" href="javascript:void(0)">
                  <i className="fab fa-twitter" />{" "}
                </a>{" "}
              </li>
              <li>
                <a className="instagram-bg-hvr" href="javascript:void(0)">
                  <i className="fab fa-instagram" />{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="close_side_menu" className="tooltip" />
    </>
  );
};

const SideLogin = () => {
  return (
    <>
      {/* side Login */}
      <div className="side-login opacity-0 gradient-bg hidden">
        <div className="inner-wrapper">
          <span
            className="btn-close btn-close-no-padding"
            id="btn_loginNavClose"
          >
            <i />
            <i />
          </span>

          {/*Login / sign up form */}
          <div className="accordion login-signup-form" id="accordionExample">
            <div className="card">
              <div className="card-header" id="login">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#login-form"
                    aria-expanded="true"
                    aria-controls="login-form"
                  >
                    LOGIN
                  </button>
                </h2>
              </div>
              <div
                id="login-form"
                className="collapse log-in"
                aria-labelledby="login"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn btn-outline-dark">
                      Login
                    </button>
                    <button type="submit" className="btn btn-outline-dark"id="close_login">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    
                  >
                    SIGN UP
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse sign-up"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Retype password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="retypeInputPassword1"
                      />
                    </div>
                    <button type="submit" className="btn btn-outline-dark">
                      Sign up
                    </button>
                    <button type="submit" className="btn btn-outline-dark"id="close_login">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="close_side_login" className="tooltip" />
    </>
  );
};

/* START HEADER NAVIGATION */
const Header = () => {
  return (
    <div className="header-area">
      <div className="container">
        <div className="row upper-nav">
          <div className=" text-left nav-logo">
            <a href="index-book-shop.html" className="navbar-brand">
              <img src="book-shop\img\logo.png" alt="img" />
            </a>
          </div>
          <div className="ml-auto nav-mega d-flex justify-content-end align-items-center">
            <header className="site-header" id="header">
              <nav className="navbar navbar-expand-md  static-nav">
                <div className="container position-relative megamenu-custom">
                  <a
                    className="navbar-brand center-brand"
                    href="index-book-shop.html"
                  >
                    <img
                      src="book-shop\img\logo.png"
                      alt="logo"
                      className="logo-scrolled"
                    />
                  </a>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          HOME
                        </a>
                      </li>

                      <li className="nav-item dropdown static">
                        <a
                          className="nav-link dropdown-toggle"
                          href="javascript:void(0)"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          BOOK'S CATEGORIES{" "}
                        </a>
                        <ul className="dropdown-menu megamenu flexable-megamenu">
                          <li>
                            <div className="container">
                              <div className="row">
                                <Categories />
                                <Categories />
                                <Categories />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="book-shop\contact.html">
                          CONTACT
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* Start side menu */}
              <SideMenu />
              <SideLogin />
              {/* End side menu */}
            </header>
            <div className="nav-utility">
              <div className="manage-icons d-inline-block">
                <ul className="d-flex justify-content-center align-items-center">
                  <li className="d-inline-block">
                    <a id="add_search_box">
                      <i className="lni lni-search search-sidebar-hover" />
                    </a>
                  </li>
                  <li className="d-inline-block mini-menu-card">
                    <a
                      href="javascript:void(0)"
                      className="d-inline-block sidelogin_btn d-block sidelogin_toggle"
                      
                    >
                      <i className="lni lni-enter" />
                    </a>
                  </li>
                  <a
                    href="javascript:void(0)"
                    className="d-inline-block sidemenu_btn d-block"
                    id="sidemenu_toggle"
                  >
                    <i className="lni lni-menu" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /* END HEADER NAVIGATION */
  );
};
export default Header;
