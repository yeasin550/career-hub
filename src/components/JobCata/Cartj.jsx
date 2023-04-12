import React from 'react';

const Cartj = ({cart}) => {
    return (
      <div className=" lg:h-52 p-4 lg:w-64 h-40 lg:pt-10 lg:p-8 lg:pl-10 mx-auto hover:bg-gray-300 cursor-pointer bg-gray-100 rounded-md">
        <img className="h-20 w-16" src={cart.picture} alt="" />
        <h1 className="text-lg font-bold  lg:mt-6">{cart.name}</h1>
        <p>{cart.jobs_available}</p>
      </div>
    );
};

export default Cartj;