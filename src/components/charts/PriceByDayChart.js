"use client"
import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PriceByDayChart = () => {
    
  const data = [
    { month: 'Jan', AtomicToken: 4000, AtomicCoin: 2400 },
    { month: 'Feb', AtomicToken: 3000, AtomicCoin: 1398 },
    { month: 'Mar', AtomicToken: 2000, AtomicCoin: 9800 },
    { month: 'Apr', AtomicToken: 2780, AtomicCoin: 3908 },
    { month: 'May', AtomicToken: 1890, AtomicCoin: 4800 },
    { month: 'Jun', AtomicToken: 2390, AtomicCoin: 3800 },
    { month: 'Jul', AtomicToken: 3490, AtomicCoin: 4300 },
    { month: 'Aug', AtomicToken: 4000, AtomicCoin: 2400 },
    { month: 'Sep', AtomicToken: 3000, AtomicCoin: 1398 },
    { month: 'Oct', AtomicToken: 2000, AtomicCoin: 9800 },
    { month: 'Nov', AtomicToken: 2780, AtomicCoin: 3908 },
    { month: 'Dec', AtomicToken: 1890, AtomicCoin: 4800 },
  ];




  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="AtomicToken" stroke="#A7A5AD" />
        <Line type="monotone" dataKey="AtomicCoin" stroke="#ff8a28" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PriceByDayChart;