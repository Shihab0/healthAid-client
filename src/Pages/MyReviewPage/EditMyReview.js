import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditMyReview = () => {
  const myReview = useLoaderData();
  const { comment, _id } = myReview;

  //   console.log(myReview);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    // console.log(comment);

    fetch(`https://health-aid-server-shihab0.vercel.app/myReview/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Updated",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center bg-green-400 text-3xl font-bold">
        Edit Review
      </h2>
      <form onSubmit={handleSubmit} className="text-center m-3">
        <textarea
          name="comment"
          defaultValue={comment}
          className="border p-5 font-bold border-lime-400 rounded-2xl"
          id=""
          cols="40"
          rows="4"
        ></textarea>
        <input
          className="btn mx-auto block btn-wide btn-outline"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default EditMyReview;
