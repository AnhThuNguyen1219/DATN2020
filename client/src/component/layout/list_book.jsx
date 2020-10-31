import React from "react";

const CardBook = (props) => {
  return (
    <>
      <figure className="gallery-grid__item category-concept">
        <div className="gallery-grid__image-wrap">
          <img
            className="gallery-grid__image cover lazyload"
            src={props.src}
            data-zoom
            alt
          />
        </div>
        <figcaption className="gallery-grid__caption">
          <div className="row">
            <h4 className="title title--h6 gallery-grid__title col-8">
              {props.name}
            </h4>

            <div className="title title--h6 gallery-grid__title col-4">
              <i class="lni lni-heart"></i>
              <i class="fas fa-share-alt"></i>
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="verticalLine"></div>
    </>
  );
};

const ListBooks = (props) => {
  return (
    <div className="container list-book">
      <h2>{props.categoryName}</h2>
      <hr />
      <div className="row book">
        <CardBook
          src="https://i.pinimg.com/originals/bb/cd/ad/bbcdada6d07915ee0a79663323168df3.jpg"
          name="AAA"
        ></CardBook>
        <CardBook
          src="https://i.pinimg.com/originals/bb/cd/ad/bbcdada6d07915ee0a79663323168df3.jpg"
          name="AAA"
        ></CardBook>
        <CardBook
          src="https://i.pinimg.com/originals/bb/cd/ad/bbcdada6d07915ee0a79663323168df3.jpg"
          name="AAA"
        ></CardBook>
        <CardBook
          src="https://i.pinimg.com/originals/bb/cd/ad/bbcdada6d07915ee0a79663323168df3.jpg"
          name="AAA"
        ></CardBook>
        <CardBook
          src="https://i.pinimg.com/originals/bb/cd/ad/bbcdada6d07915ee0a79663323168df3.jpg"
          name="AAA"
        ></CardBook>
      </div>
    </div>
  );
};

export default ListBooks;
