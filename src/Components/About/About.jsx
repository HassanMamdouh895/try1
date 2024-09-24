import React from "react";

export default function About() {
  return (
    <>
      <div className="flex justify-center  flex-col bg-green-400  h-screen items-center">
        <h1 className="text-5xl font-semibold whitespace-nowrap text-center text-white pt-8">
          ABOUT COMPONETS
        </h1>
        <div className="flex justify-center items-center pt-4">
          <div className="h-1 bg-white w-20"></div>
          <i className="fa-solid px-4 text-white  fa-star"></i>
          <div className="h-1 bg-white w-20"></div>
        </div>
        <div className=" grid gap-6 w-2/3 text-white  md:grid-cols-4 pt-4">
          <div className="col-span-2">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-span-2">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
