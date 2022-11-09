import { GiPencil, GiTrashCan } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceCard = ({ service }) => {
  const { service_name, image, description, _id } = service;

  const handleDetails = (id) => {
    fetch(`http://localhost:5000/services/${id}`);
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete ?");
    if (proceed) {
      fetch(`http://localhost:5000/delete/${id}`, {
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
          window.location.reload(true);
        });
    }
  };

  return (
    <div className="">
      <div className="card grid grid-cols-1 mb-7 md:mb-0 md:grid-cols-2 card-side bg-slate-300 shadow-xl">
        <figure>
          <img className="h-80" src={image} alt={service_name} />
        </figure>
        <div className="card-body lg:p-5 md:p-3 overflow-hidden">
          <h2 className="card-title text-3xl font-bold">{service_name}</h2>
          <p className="text-lg">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/details/${_id}`}
              onClick={() => handleDetails(_id)}
              className="btn md:btn-md lg:btn-xl btn-outline font-bold"
            >
              Details
            </Link>
            <Link
              onClick={() => handleDelete(_id)}
              title="delete"
              className="btn md:btn-md lg:btn-xl btn-outline font-bold"
            >
              <GiTrashCan className="text-xl"> </GiTrashCan>
            </Link>
            <Link
              to={`/edit/${_id}`}
              onClick={() => _id}
              title="edit"
              className="btn md:btn-md lg:btn-xl btn-outline font-bold"
            >
              <GiPencil className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
