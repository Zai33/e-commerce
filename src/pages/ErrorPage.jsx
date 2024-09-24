import React from "react";
import { Link } from "react-router-dom";
import { linkStyle } from "../utils/style";

const ErrorPage = () => {
  return (
    <section className="w-full flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className=" text-5xl font-bold text-red-500">Oops..</p>
        <p className="text-5xl font-bold">404 Page Not Found</p>
        <Link to={"/"} className={linkStyle}>
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
