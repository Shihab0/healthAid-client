import React, { useEffect, useState } from "react";
import { GiFlamingArrow } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

const Details = () => {
  const data = useLoaderData();
  const { service_name, _id, image, description, service_fee, service_type } =
    data.data;
  const [review, setReview] = useState([]);
  //   console.log(review);

  useEffect(() => {
    fetch(`https://health-aid-server-shihab0.vercel.app/review/${_id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [_id, review]);

  return (
    <div className="md:grid md:grid-cols-2 gap-5">
      <div className="border border-stone-900 bg-green-400">
        <h2 className="text-2xl font-bold p-5 text-center bg-green-400 ">
          Details About {service_name} Service
        </h2>
        <div>
          <div className="card w-full px-2 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} alt={service_name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title text-2xl font-bold">{service_name}</h2>
              <p className="text-lg">{description}</p>
              <h2 className="text-left font-bold text-xl text-orange-700">
                Service Type: {service_type}
              </h2>{" "}
              <div className="card-title text-orange-600 font-bold text-xl">
                <h2 className="text-left mt-[-10px]">
                  Service Fee: ${service_fee}
                </h2>
              </div>
              <div className="card-actions">
                <button className="btn font-bold btn-primary">
                  Get This <GiFlamingArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400">
        <h2 className="font-bold text-2xl text-center p-5 bg-green-400">
          Add a review
        </h2>
        <div>
          <div className="card w-full p-3 bg-base-100 shadow-xl">
            <ReviewForm _id={_id}></ReviewForm>
          </div>
          <h2 className="text-center text-white font-bold text-2xl bg-slate-800 p-5">
            Total Review: ({review.length})
          </h2>
          <div className="overflow-y-scroll h-96">
            {review.length === 0 ? (
              <h2 className="font-bold text-3xl mt-6 p-4 text-red-500">
                No Review Found. Please provide a review.
              </h2>
            ) : (
              <div>
                {review.map((rev) => (
                  <ReviewCard key={rev._id} rev={rev}></ReviewCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
