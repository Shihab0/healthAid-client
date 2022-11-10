import { useEffect, useState } from "react";
import { RiServiceFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ServiceCard from "../HomePage/Services/ServiceCard";

const AllService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?w=1060&t=st=1667907000~exp=1667907600~hmac=b8c579f10d3f087f2ef9f93f5bc3bab0a70824ed54ff4ea0e879b7eb532a9100")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Here you can check my schedule
            </h1>
            <p className="mb-5">
              In general, morning appointments will have the shortest wait times
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div>
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
        </div>
      </div>
    </div>
  );
};

export default AllService;
