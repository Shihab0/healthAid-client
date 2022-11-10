import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div>
      <h2 className="text-3xl bg-green-400 font-bold p-4 text-center">
        My Blog: At a glance
      </h2>
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between SQL and NoSQL
          </div>
          <div className="collapse-content">
            <p>
              SQL databases are table based, while NoSQL databases can be
              document-oriented, key-value pairs, or graph structures. A
              document contains key value pairs which are ordered and can be
              nested. <br />
              SQL databases scale vertically, usually on a single server. To
              scale a SQL database, you have to increase hardware. This can make
              applications prohibitively expensive when dealing with vast
              amounts of data. NoSQL databases are horizontally scalable. To
              scale a NoSQL database, you add more servers. This is better for
              modern cloud-based infrastructures, which offer distributed
              resources.{" "}
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key. User's Client
              uses the JWT to access protected resources by passing the JWT in
              HTTP Authorization header. Resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
