import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  
  let data = [
    {
      id: 1,
      name: "Assignment-1",
      mark: 55,
    },
    {
      id: 2,
      name: "Assignment-2",
      mark: 54,
    },
    {
      id: 3,
      name: "Assignment-3",
      mark: 58,
    },
    {
      id: 4,
      name: "Assignment-4",
      mark: 58,
    },
    {
      id: 5,
      name: "Assignment-5",
      mark: 52,
    },
    {
      id: 6,
      name: "Assignment-6",
      mark: 60,
    },
    {
      id: 7,
      name: "Assignment-7",
      mark: 60,
    },
    {
      id: 8,
      name: "Assignment-8",
      mark: 60,
    },
  ];
    return (
      <div className="mx-auto mb-10" style={{ width: "80%", height: "50%" }}>
        <p className=" mt-8  text-2xl flex justify-center animate-text bg-gradient-to-r from-teal-700 via-purple-700 to-orange-700 bg-clip-text text-transparent  font-black">
          My All Assignment Mark SynchronizedAreaChart
        </p>

        <ResponsiveContainer className="mt-16" width="100%" height={400}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mark"
              stroke="#81ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }


export default Statistics;
