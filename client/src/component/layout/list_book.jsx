import React from "react";

const CardBook = (props) => {
  return (
    <>
      <div
        className="card text-center"
        style={{ width: "200px", margin: "auto" }}
      >
        <div className="parent">
          <img src={props.src} className="card-img-top" alt="..." />
          <div class="child">
            <i class="lni lni-heart"></i>{" "}

            <i class="fas fa-share-alt"></i>
          </div>
        </div>

        <div className="card-body">
          <p className="card-text">{props.name}</p>
        </div>
      </div>
    </>
  );
};

const ListBooks = () => {
  return (
    <div className="container list-book">
        <h2>NEW</h2>
        <hr/>
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
