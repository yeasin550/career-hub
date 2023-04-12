import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import JobCata from "../JobCata/JobCata";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
// import logo from '../../../public/99500-company-statistic-graph.json';
const Home = () => {
  return (
    <>
      {/* heder cover  */}
      <div className="mb-24 py-5 lg:mb-0  ">
        <div className="grid md:mx-20 lg:mx-36  lg:grid-cols-2 h-[calc(100vh-150px)]">
          <div className="lg:order-2 my-auto">
            <img
              className=" lg:h-[calc(100vh-150px)] object-cover  w-full h-fill"
              src={"men.png"}
              alt=""
            />
          </div>
          <div className="lg:order-1 mx-2  my-auto">
            <h1 className="text-5xl  font-bold">
              How To Find Your Dream Position in one 
              <br />
              <span className="animate-text bg-gradient-to-r from-teal-700 via-purple-700 to-orange-700 bg-clip-text text-transparent text-5xl font-black">
                Dream Job ?
              </span>
            </h1>
            <p className="my-4 text-xl">
              A successful interview depends on various factors, from what steps
              you take to prepare to how you conduct yourself in the meeting.
              You may have multiple rounds of interviews before receiving a job
              offer, so it's important to ensure you approach each one
              appropriately.
            </p>
            <Link className="btn-primary  mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* Job Category List */}
      <JobCata />
      <FeaturedJobs />
    </>
  );
};

export default Home;
