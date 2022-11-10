import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add service");
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.name.value;
    const serviceFee = form.serviceFee.value;
    const serviceType = form.serviceType.value;
    const serviceImg = form.serviceImg.value;
    const description = form.description.value;
    console.log(serviceName, serviceFee, serviceType, serviceImg, description);

    const service = {
      service_name: serviceName,
      service_type: serviceType,
      image: serviceImg,
      service_fee: serviceFee,
      description: description,
    };
    fetch("https://health-aid-server-shihab0.vercel.app/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-slate-700">
      <h2 className="text-3xl text-white font-bold text-center bg-slate-900 p-5">
        Add a service
      </h2>
      <div>
        <form onSubmit={handleAddService} className="p-4 ">
          <div className="md:grid grid-cols-2 gap-2 justify-items-center">
            <div className="form-control my-2 ">
              <label className="input-group">
                <span className="w-36 font-bold">Service Name:</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Service Name"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group">
                <span className="w-36 font-bold">Service Fee:</span>
                <input
                  name="serviceFee"
                  type="number"
                  placeholder="Service Fee"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-2 justify-items-center">
            <div className="form-control my-2 ">
              <label className="input-group">
                <span className="w-36 font-bold">Service Type:</span>
                <input
                  name="serviceType"
                  type="text"
                  placeholder="Service type"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group">
                <span className="w-36 font-bold"> Image URL: </span>
                <input
                  name="serviceImg"
                  type="text"
                  placeholder="Image url"
                  className="input input-bordered"
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex mt-2 items-center md:justify-evenly">
            <div className="form-control">
              <label className="input-group">
                <span className="w-36 font-bold">Description:</span>
                <textarea
                  name="description"
                  className="textarea textarea-warning md:w-96"
                  placeholder="Service description"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="text-center mt-4">
            <input
              className="btn btn-wide btn-outline bg-warning"
              type="submit"
              value="Add service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
