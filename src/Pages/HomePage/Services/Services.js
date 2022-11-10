import React, { useEffect, useState } from "react";
import { RiServiceFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://health-aid-server-shihab0.vercel.app/services")
      .then((res) => res.json())
      .then((Services) => setServices(Services));
  }, [services]);

  return (
    <div className="border border-lime-700 border-b-8 border-x-8">
      <div className="text-slate-200 bg-lime-700 p-5 text-center">
        <h2 className=" font-bold text-2xl">
          {" "}
          <RiServiceFill className="inline-block" /> Services{" "}
        </h2>
        <p> Here you will get your service as per your requirement. </p>
      </div>
      <div className="md:grid p-3 grid-cols-2 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center m-5">
        <Link
          to="/allservices"
          className="btn btn-wide btn-outline bg-lime-700 font-bold "
        >
          See All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
