import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { service_name, _id, image, description } = data.data;

  return (
    <div className="md:grid md:grid-cols-2 gap-5">
      <div className="border border-stone-900 bg-green-400">
        <h2 className="text-2xl font-bold p-5 text-center bg-green-400 ">
          Details About {service_name} Service
        </h2>
        <div>
          <div className="card w-full p-2 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} alt={service_name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
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
            <figure className="px-10 pt-10">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
