import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import reviewerImg from "../../assets/images/revewer.webp";

const MyReviewCard = ({ rev }) => {
  const { _id, photo, name, comment, rating } = rev;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete ?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteReview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          if (data.data.deletedCount) {
            Swal.fire({
              icon: "success",
              title: "Successfully Deleted",
            });
          }
        });
    }
  };

  const handleEdit = () => {};

  return (
    <div className="bg-slate-300 w-full md:w-9/12 mx-auto my-4 p-5 shadow-2xl border border-slate-900 rounded-md border-x-8 ">
      <div className="flex items-center flex-wrap md:flex-nowrap md:gap-10">
        {photo ? (
          <>
            <img
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              src={photo}
              alt=""
            />
          </>
        ) : (
          <>
            <img
              style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              src={reviewerImg}
              alt=""
            />
          </>
        )}
        <div>
          <h2 className="font-bold ">Name: {name} </h2>
          <h3 className="font-semibold">Email: </h3>
          <h3 className="font-semibold">
            Rating: {rating}
            {rating > 4 ? (
              <div className="text-xl text-warning flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            ) : (
              <div className="text-xl text-warning flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            )}
          </h3>
          <p>{comment}</p>
        </div>
        <div>
          <button
            title="delete"
            onClick={() => handleDelete(_id)}
            className="btn font-bold text-lg btn-ghost btn-outline mr-2"
          >
            {" "}
            <RiDeleteBin6Line />{" "}
          </button>
          <Link to={`/editReview/${_id}`}>
            <button
              title="edit"
              className="btn font-bold text-lg btn-ghost btn-outline mr-2"
            >
              <RiEdit2Fill />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
