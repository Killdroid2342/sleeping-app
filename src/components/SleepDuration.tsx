import React from 'react';
import { LineChart, Line, YAxis, XAxis } from 'recharts';

const SleepDuration = ({ prevData }: any) => {
  return (
    <>
      <p className='text-center text-2xl font-bold'>Sleep Duration</p>
      <LineChart width={400} height={400} data={prevData}>
        <Line type='monotone' dataKey='sleepingHours' stroke='#8884d8' />
        <YAxis />
        <XAxis dataKey='day' />
      </LineChart>
    </>
  );
};

export default SleepDuration;
