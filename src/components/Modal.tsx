import React, { useState } from 'react';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';
const Modal = ({
  close,
  isLoggedIn,
  setPrevData,
  prevData,
  clientUsername,
}: any) => {
  const [data, setData] = useState({
    date: '',
    bedtime: '',
    wakeUpTime: '',
    hoursofsleep: '',
  });

  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  async function submitForm(e: any) {
    e.preventDefault();

    const newResult = { ...data };
    setPrevData((setPrevData: any) => [...setPrevData, newResult]);
    console.log(prevData);

    const res = await instance.post('/sleepData/addToDatabase', {
      date: data.date,
      bedtime: data.bedtime,
      wakeUpTime: data.wakeUpTime,
      hoursofsleep: data.hoursofsleep,
      clientUsername: clientUsername,
    });
    console.log(res);
  }

  function loginInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-50'>
      <div className='bg-white p-4 rounded-lg overflow-hidden'>
        <button
          className='mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg'
          onClick={close}
        >
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'></h2>
        {isLoggedIn ? (
          <form className='flex flex-col items-center' onSubmit={submitForm}>
            <label className='font-bold'>Enter Date</label>
            <input
              type='date'
              placeholder='day'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none mb-3'
              onChange={loginInput}
              name='date'
              value={data.date}
              required
            />
            <label className='font-bold'>Bed Time</label>
            <input
              type='time'
              placeholder='Bed Time'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none mb-3'
              onChange={loginInput}
              name='bedtime'
              value={data.bedtime}
              required
            />
            <label className='font-bold'>Wake Up Time</label>
            <input
              type='time'
              placeholder='Enter Wake Up Time'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none mb-3'
              onChange={loginInput}
              name='wakeUpTime'
              value={data.wakeUpTime}
              required
            />
            <label className='font-bold'>Enter Sleeping Hours</label>
            <input
              type='number'
              placeholder='Enter Sleeping Hours'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none mb-3'
              onChange={loginInput}
              name='hoursofsleep'
              value={data.hoursofsleep}
              required
            />
            <input
              type='submit'
              className='border border-black mt-5 rounded-2xl p-3 cursor-pointer text-xl font-bold'
            />
          </form>
        ) : (
          <p>You are not logged in. Please log in to use this feature.</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
