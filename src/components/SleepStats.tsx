import React from 'react';

const SleepStats = ({ prevData }: any) => {
  return (
    <>
      <p className='text-center text-2xl font-bold'>Sleep Stats</p>
      <div className='flex flex-row'>
        <ul className='border border-black'>
          <li className='text-center'>Date</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.day}
            </li>
          ))}
        </ul>
        <ul className='border border-red-900'>
          <li className='text-center'>Time Of Sleep</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.timeOfSleep}
            </li>
          ))}
        </ul>
        <ul className='border border-blue-900'>
          <li className='text-center'>Wake Up Year</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.wakeUpTime}
            </li>
          ))}
        </ul>
        <ul className='border border-green-900'>
          <li className='text-center'>Sleep Duration</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.sleepingHours}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SleepStats;
