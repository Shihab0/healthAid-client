import { FiEdit } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditService = () => {
  const service = useLoaderData();
  const { service_name, service_type, image, description, service_fee, _id } =
    service[0];

  const handleEdit = (e) => {
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

    fetch(`https://health-aid-server-shihab0.vercel.app/edit/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Updated",
          });
        }
      });
  };

  return (
    <div className="bg-slate-700">
      <h2 className="text-3xl text-white font-bold text-center bg-slate-900 p-5">
        Edit <span className="text-red-400">{service_name}</span> Service{" "}
        <FiEdit className="inline ml-2" />
      </h2>
      <div>
        <form onSubmit={handleEdit} className="p-4 ">
          <div className="md:grid grid-cols-2 gap-2 justify-items-center">
            <div className="form-control my-2 ">
              <label className="input-group">
                <span className="w-36 font-bold">Service Name:</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Service Name"
                  className="input input-bordered"
                  defaultValue={service_name}
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
                  defaultValue={service_fee}
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
                  defaultValue={service_type}
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
                  defaultValue={image}
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
                  defaultValue={description}
                ></textarea>
              </label>
            </div>
          </div>
          <div className="text-center mt-4">
            <input
              className="btn btn-wide btn-outline bg-warning"
              type="submit"
              value="Update Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditService;
