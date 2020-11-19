import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addReviewBook } from "../../service/DataService.jsx";

const Review = (props) => {
  const [value, setValue] = useState("");
  const [rate, setRate] = useState();

  const handlePostReview = (event) => {
    event.preventDefault();
    addReviewBook(props.userID, props.bookID, rate, value).then((status) => {
      if (status == 200) {
        alert("Thành công!");
        window.location.reload();
      } else if (status == 400) {
        alert("Bạn đã đánh giá cuốn sách này!");
        window.location.reload();
      } else {
        alert(status);
        console.log(status);
      }
    });
  };

  return (
    <div>
      <form>
        <div className="form-group ">
          <label htmlFor="formControlRange">
            Bạn cảm nhận như thế nào về cuốn sách này?
          </label>

          <input
            type="range"
            className="form-control-range col-6"
            id="formControlRange"
            min="0"
            max="100"
            onChange={(event) => setRate(event.target.value)}
          />
          <label htmlFor="formControlRange">
            Thích cuốn sách này {rate} <i className="lni lni-heart-filled"></i>
          </label>
        </div>
      </form>
      <p>Viết cảm nhận của bạn vào đây nha</p>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div className="row col-12 reviewSubmit">
        <div className="col"></div>
        <button
          type="button"
          className="btn col-4"
          style={{ backgroundColor: "#ffc107", color: "#fff" }}
          onClick={handlePostReview}
        >
          Đăng
        </button>
      </div>
    </div>
  );
};
export default Review;
