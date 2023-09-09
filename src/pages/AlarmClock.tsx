import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';

const AlarmClock = () => {
  const [clockTime, setClockTime] = useState('00:00:00');
  const [alarmTime, setAlarmTime] = useState('00:00:00');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (status && clockTime === alarmTime) {
      console.log('get up', clockTime, alarmTime);
      alert('Timer Finished');
      setStatus(false);
    }
    const intervalId = setInterval(updateClockTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [clockTime, alarmTime, status]);

  const updateClockTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const clockFormat = `${hours}:${minutes}:${seconds}`;
    setClockTime(clockFormat);
  };

  const handleAlarmTimeChange = (e: any) => {
    const newAlarmTime = e.target.value;
    setAlarmTime(newAlarmTime);
  };

  const handleToggle = () => {
    setStatus(!status);
  };

  const handleReset = () => {
    setAlarmTime('00:00:00');
    setStatus(false);
  };

  return (
    <div className='background '>
      <Nav />
      <h1 className='text-center text-white text-2xl font-bold'>Alarm Clock</h1>
      <div className='flex flex-col justify-center h-screen'>
        <div className='flex flex-col items-center'>
          <h2 className='text-center text-white text-6xl mb-5'>{clockTime}</h2>
          <input
            type='time'
            step='1'
            value={alarmTime}
            onChange={handleAlarmTimeChange}
            className='text-center text-4xl mb-5'
          />
        </div>
        <div className='flex flex-row justify-center'>
          <button
            className='text-center text-white border border-white p-2 rounded-md'
            onClick={handleToggle}
          >
            {status ? 'Stop Alarm' : 'Start Alarm'}
          </button>
          <button
            className='text-center text-white border border-white p-2 rounded-md'
            onClick={handleReset}
          >
            Reset Alarm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlarmClock;
