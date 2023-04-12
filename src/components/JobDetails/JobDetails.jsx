import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faCalendar,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData, useParams } from "react-router-dom";
import data from '../../../public/jobs.json'
import { addToDb } from "../utils/fakeDB";
import toast, { Toaster } from 'react-hot-toast'


const JobDetails = () => {
  const { id } = useParams();
  const jobsDetails = data?.find((p) => p.id === parseInt(id));
  // console.log(jobsDetails);
  const notify = (id) =>{
    toast.success('Your Job Applied successfully')
    addToDb(id)
  };
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    job_responsibility,
    education_requirements,
    experiences,
    email,
    phone,
  } = jobsDetails;
  

  return (
    <div className="mt-8 h-100vh mx-3 md:mx-20 lg:mx-36 md:mt-60 lg:mt-10 mb-10">
      <h1 className="text-center font-bold text-2xl">Job Details</h1>
      <div className="grid gap-3 lg:grid-cols-3 lg:mt-20">
        <div className="lg:col-span-2 mt-10">
          <p>
            <span className="font-bold">Job Description : </span>{job_description}</p>
          <p className="mt-8">
            <span className="font-bold">Job Responsibility : </span>{job_responsibility} </p>
          <h4 className="font-bold mt-5">Educational Requirements: </h4>
          <p className="mt-4">{education_requirements}</p>
          <h4 className="font-bold mt-6">Experiences:</h4>
          <p className="mt-4">{experiences}</p>
        </div>
        <div className="">
          <div className="bg-gray-100 hover:bg-gray-300 rounded-xl p-8">
            <h1 className="font-bold">Job Details</h1>
            <hr className="h-px my-4 bg-blue-400 border-0 " />
            <div className="flex items-center">
              <p>
              <FontAwesomeIcon className="text-blue-600" icon={faDollarSign} />
                <span className="font-bold ml-2">Salary : </span>{salary}</p>
            </div>
            <div className="flex items-center mt-3">
              <p>
              <FontAwesomeIcon className="text-blue-600" icon={faCalendar} />
                <span className="font-bold ml-2">Job Title : </span>{job_title}</p>
            </div>
            <h1 className="font-bold mt-6">Contact Information</h1>
            <hr className="h-px my-4 bg-blue-400 border-0 " />
            <div className="flex items-center">
              <p>
              <FontAwesomeIcon className="text-blue-600" icon={faPhone} />
                <span className="font-bold ml-2">Phone : </span>{phone}</p>
            </div>
            <div className="flex items-center mt-3">
              <p>
              <FontAwesomeIcon className="text-blue-600" icon={faEnvelope} />
                <span className="font-bold ml-2">Email : </span>{email}</p>
            </div>
            <div className="flex my-auto mt-3">
              <p>
              <FontAwesomeIcon className="text-blue-600 items-center" icon={faLocationDot} />
                <span className="font-bold ml-2">Address : </span>{location}</p>
            </div>
          </div>
            <div>
              <button onClick={() => notify(id)} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full mt-6">Apply Now</button>
            <Toaster/>
            </div>
            {/* <button onClick={() => addToDb(id) } className="btn-primary w-full mt-6">Apply Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;






