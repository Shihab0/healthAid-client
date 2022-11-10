import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect } from "react";
import { GiH2O } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const ReviewForm = ({ _id }) => {
  const { user } = useContext(AuthContext);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const comment = form.comment.value;
    console.log(name, rating, comment);

    const review = {
      name: user?.displayName,
      photo: user?.photoURL,
      email: user?.email,
      rating,
      comment,
      productId: _id,
    };

    fetch("https://health-aid-server-shihab0.vercel.app/addReview", {
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
          title: "Thanks",
          text: data.message,
        });
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleReview} className="p-5">
        <div className="form-control">
          <label className="input-group mb-2">
            <span className="w-32 py-3 bg-slate-700 font-bold text-white">
              Rating Out Of 5:{" "}
            </span>
            <input
              max={5}
              min={2}
              className="text-center w-60 font-bold"
              defaultValue="5"
              name="rating"
              type="number"
              placeholder="Enter a number"
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
              required
            ></textarea>
          </label>
        </div>
        {user?.email ? (
          <div className="text-center mt-3">
            <input
              className="btn btn-outline btn-wide"
              type="submit"
              value="Add Review"
            />
          </div>
        ) : (
          <h2 className="text-2xl">
            Please{" "}
            <Link className="text-red-600 underline" to="/login">
              Login
            </Link>{" "}
            to add a review
          </h2>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
