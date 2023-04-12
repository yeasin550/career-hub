import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";


const SingleFeatured = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;

  

  return (
    <div className="border-2 pt-10 rounded-lg hover:bg-gray-200 border-gray-300 pl-14 pb-10">
      <img className="h-18 w-40" src={company_logo} alt="" />
      <h1 className="font-bold text-2xl mt-4">{job_title}</h1>
      <p className="text-xl">{company_name}</p>
      <div className="flex my-4">
        <button className=" border-2 border-purple-600 rounded-lg px-3 py-2 text-black-400 cursor-pointer hover:bg-purple-400 hover:font-bold-200">
          {remote_or_onsite}
        </button>
        <button className="border ml-4 py-2 px-4 bg-transparent text-green-600 font-semibold  border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
          {fulltime_or_parttime}
        </button>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="ml-2">{location}</p>
        </div>
        <div className="flex ml-6 items-center">
          <FontAwesomeIcon icon={faDollarSign} />
          <p className="ml-2">Salary : {salary}</p>
        </div>
      </div>
      <button className=" mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <Link to={`/JobDetails/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default SingleFeatured;
