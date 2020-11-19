import React, { useState, useEffect } from "react";
import axios from "axios";
import {addFavourBook} from "../../service/DataService.jsx";
import Review from "./review.jsx";
import { Collapse, Button, CardBody, Card } from "reactstrap";
const LinktoBook = (props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb text-center text-lg-left">
        <li className="breadcrumb-item">
          <a href="/">Trang chủ</a>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <a href="">Books</a>
        </li>
        <li className="breadcrumb-item">
          <a className="active" href="javascript:void(0)">
            {props.Title}
          </a>
        </li>
      </ol>
    </nav>
  );
};

const BookImg = (props) => {
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
                <img className="myimage" src={props.cover} alt="gallery" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BookInfor = (props) => {
  const [isFavour, setIsFavour] = useState(false);
  function handleFavour(event) {
    event.preventDefault();
    if (props.userID == null)
      alert("Bạn phải đăng nhập để thực hiện chức năng này!");
    else {
      addFavourBook(props.userID, props.data.id).then((status) => {
        if (status == 200) {
         setIsFavour(true);

        } else {
          alert(status);
          console.log(status);
        }
      });
    }
  }
  
  function handleReview(event) {
    event.preventDefault();
    if (props.userID == null)
      alert("Bạn phải đăng nhập để thực hiện chức năng này!");
    else setIsOpen(!isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="row product-list product-detail">
      <div className="col-12 col-lg-6 product-detail-slider">
        <BookImg cover={props.data.cover} />
      </div>
      <div className="col-12 col-lg-6 text-center text-lg-left">
        <h1>{props.data.title}</h1>

        <div className="dropdown-divider" />
        <div className="product-tags-list">
          <nav aria-label="breadcrumb">
            <ol>
              <li>
                <p className="d-inline" id={props.author.id}>
                  Tác giả: <span>{props.author.name}</span>
                </p>
              </li>
              <li>
                <p className="d-inline" id={props.publisher.id}>
                  Nhà xuất bản: <span>{props.publisher.name}</span>
                </p>
              </li>
              <li>
                <span className="d-inline">
                  Thể loại:{" "}
                  {props.category.map((cate) => (
                    <>
                      <a href="javascript:void(0)" id={cate.id}>
                        {cate.name}
                      </a>{" "}
                    </>
                  ))}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        {/* share area */}
        <div className="share-product-details">
          <ul className="share-product-icons">
            <li>
              <p>Chia sẻ:</p>
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
            {isFavour ? (
              <button type="button" className="btn btn-danger">
                Đã yêu thích
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleFavour}
              >
                <i className="lni lni-heart"></i> Yêu thích
              </button>
            )}
          </div>
          <div className="col-6">
            <Button
              outline
              color="dark"
              onClick={handleReview}
              style={{ borderRadius: "1px solid rgb(0,0,0,0.1)" }}
            >
              <i className="fas fa-user-edit"></i> Đánh giá
            </Button>
          </div>{" "}
        </div>
      </div>
      <Collapse isOpen={isOpen} className="container">
        <div className="col-12 reviews" id="review">
          <Review userID={props.userID} bookID={props.data.id}/>
          <div className="row col-12 reviewSubmit">
            <div className="col"></div>
            <button type="button" className="btn btn-dark col-4" onClick={toggle}>
              Huỷ bỏ
            </button>
          </div>
        </div>
      </Collapse>

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
                Thông tin về sách
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
                Đánh giá của người đọc
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
                {props.data.description}
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

const Detail = (props) => {
  const [data, setData] = useState({});
  const [author, setAuthor] = useState({});
  const [publisher, setPublisher] = useState({});
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const userID = localStorage.getItem("user-id");
  const apistring = "http://localhost:9000/api/book/" + props.id;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(apistring);

      if (result.status == 200) {
        setData(result.data);
        setAuthor(result.data.author);
        setPublisher(result.data.publisher);
        setCategory(result.data.category);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
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
                      Sách
                    </h4>
                    <p className="pro-text text-center text-lg-left">
                      <cite>
                        “Việc đọc rất quan trọng. Nếu bạn biết cách đọc, cả thế
                        giới sẽ mở ra cho bạn.”
                      </cite>
                      – Barack Obama
                    </p>
                  </div>
                </div>

                {isLoading ? (
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border text-secondary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <BookInfor
                    data={data}
                    author={author}
                    publisher={publisher}
                    category={category}
                    userID={userID}
                  />
                )}

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
