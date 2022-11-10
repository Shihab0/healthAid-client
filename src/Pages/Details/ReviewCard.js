import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import reviewerImg from "../../assets/images/revewer.webp";

const ReviewCard = ({ rev }) => {
  const { name, photo, email, comment, rating } = rev;

  return (
    <div className="bg-slate-300 w-full mx-auto my-4 p-5 shadow-2xl border border-slate-900 rounded-md border-x-8 ">
      <div className="flex items-center gap-10">
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
          <h3 className="font-semibold">Email: {email}</h3>
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
      </div>
    </div>
  );
};

export default ReviewCard;
