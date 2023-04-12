import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobAp from "../JobAp/JobAp";

const Applied = () => {
  const sevCard = useLoaderData();
  const [data, setData] = useState(sevCard);
  const [rem, setRem] = useState(sevCard);

  const fil = (id) =>{
    const remaing = data.filter( da => da.remote_or_onsite === id)
    setRem(remaing);
  }


  return (
    <div className="mt-8 md:mx-20 mx-4 min-h-[calc(100vh-200px)] mb-6 lg:mx-36">
      <h1 className="text-center font-bold text-2xl">
        {data.length !== 0 ? "Applied Jobs" : "No Applied"}
      </h1>
      <div className={data.length !== 0 ? "text-right mt-8 " : "hidden"}>
        <button
          onClick={() => fil("Onsite")}
          className="border ml-4 py-2 px-4 bg-transparent text-green-600 font-semibold  border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          Onsite
        </button>
        <button
          onClick={() => fil("Remote")}
          className="border ml-4 py-2 px-4 bg-transparent text-green-600 font-semibold  border-green-600 rounded hover:bg-green-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          Remote
        </button>
      </div>
      {rem.map((da) => (
        <JobAp key={da.id} card={da} />
      ))}
    </div>
  );
};

export default Applied;
