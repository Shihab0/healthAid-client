import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  useTitle("My reviews");

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://health-aid-server-shihab0.vercel.app/review?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email, review]);

  return (
    <div>
      <h2 className="text-center text-3xl mt-3 p-3 font-bold bg-lime-300">
        You have {review.length} review.
      </h2>
      <div>
        {review.map((rev) => (
          <MyReviewCard key={rev._id} rev={rev}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
