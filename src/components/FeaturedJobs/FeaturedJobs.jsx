import React, { useEffect, useState } from "react";
import SingleFeatured from "./SingleFeatured";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  

  const [scl, setScl] = useState([]);
  const [jobs, setJob] = useState([]);
  
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setScl(data.slice(0, 4)); // update state of scl with first 4 jobs from data
      })
      .catch((error) => console.log(error));
  }, []);
  

  const seeAll =()=>{
    setScl(jobs)
  };

  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center font-bold">Featured Jobs</h1>
      <p className="text-center text-xl mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future.
      </p>

      <div className="grid md:mx-20 mx-4  mb-6 lg:mx-36 gap-6 mt-6 lg:grid-cols-2">
        {scl.map((job) => (
          <SingleFeatured key={job.id} job={job} />
        ))}
      </div>
      <div
        className={
          scl.length == 6 ? "hidden" : "w-100vh flex justify-center mb-8"
        }
      >
        <Link
          onClick={seeAll}
          className="btn-primary  mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          See All Jobs
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobs;
