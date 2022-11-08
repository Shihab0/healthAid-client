import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ReviewForm = ({ _id }) => {
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    console.log(name, email, comment);

    const review = {
      name,
      email,
      comment,
      productId: _id,
    };

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleReview} className="p-5">
        <div className="form-control">
          <label className="input-group mb-2">
            <span className="w-32 bg-slate-700 font-bold text-white">
              Your Name:{" "}
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </label>
          <label className="input-group mb-2">
            <span className="w-32 bg-slate-700 font-bold text-white">
              Your Email:{" "}
            </span>
            <input
              name="email"
              type="Email"
              placeholder="Enter Email"
              className="input input-bordered"
            />
          </label>
          <label className="input-group mb-3">
            <span className="w-32 bg-slate-700 font-bold text-white">
              Comment :{" "}
            </span>
            <textarea
              name="comment"
              className="textarea input-bordered w-64"
              placeholder="Type here........"
            ></textarea>
          </label>
        </div>
        <div className="text-center mt-3">
          <input
            className="btn btn-outline btn-wide"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
