import React from "react";

const ReviewCard = ({ rev }) => {
  const { name, comment, email } = rev;

  return (
    <div className="bg-slate-300 w-full mx-auto my-4 p-5 shadow-2xl border border-slate-900 rounded-md border-x-8 ">
      <h2 className="font-bold ">Name: {name} </h2>
      <h3 className="font-semibold">Email: {email}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;
