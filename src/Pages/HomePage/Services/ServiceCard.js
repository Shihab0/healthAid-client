import React from "react";

const ServiceCard = ({ service }) => {
  const { service_name, image } = service;
  console.log(service_name);

  return (
    <div className="">
      <div className="card grid grid-cols-1 mb-7 md:mb-0 md:grid-cols-2 card-side bg-sky-200 shadow-xl">
        <figure>
          <img className="h-80" src={image} alt={service_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
