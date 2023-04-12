import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobAp = ({ card }) => {
 
  const {
    id,
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = card;
  return (
    <div className="flex mt-10 mb-8 border-2 lg:justify-between">
      <div className=" flex">
        <div className="h-44 w-44 border-2 m-4 flex items-center justify-center bg-slate-200">
          <img className="lg:h-12 lg:w-32" src={company_logo} alt="" />
        </div>

        <div className="flex items-center">
          <div>
            <h1 className="text-xl font-bold">{job_title}</h1>
            <p className="">{company_name}</p>
            <div className="flex mt-4">
              <button className="border py-1 px-4 rounded-sm text-blue-600  border-blue-500">
                {remote_or_onsite}
              </button>
              <button className="border py-1 px-4 rounded-sm text-blue-600  border-blue-500 ml-3">
                {fulltime_or_parttime}
              </button>
            </div>
            <div className="flex mt-4">
              <p>
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                {location}
              </p>
              <p className="ml-4">
                <FontAwesomeIcon icon={faDollarSign} /> Salary : {salary}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mr-6">
        <button className=" mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center ">
          <Link to={`/JobDetails/${id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default JobAp;
