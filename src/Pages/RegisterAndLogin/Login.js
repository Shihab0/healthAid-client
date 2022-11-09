import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        console.log(location.state);
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        if (error) {
          Swal.fire({
            icon: "error",
            title: error,
          });
        } else {
        }
      });
  };

  useEffect(() => {
    if (user && user.uid) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="hero p-10 bg-base-300">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            For get more services you must login first. Hopefully it helps you
            to Explore more services that you need.
          </p>
        </div>
        <div
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100"
        >
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <div>
                  <small className="">New to health aid? </small>
                  <Link
                    className="label-text-alt text-red-700 link link-hover"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </label>
            </div>
            <div className="form-control mt-4">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          {/* <button onClick={handleGoogleLogin} className="btn btn-outline bg-warning">
            Login With Google
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
