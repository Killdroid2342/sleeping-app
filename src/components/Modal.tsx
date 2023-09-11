import React, { useState } from 'react';

type Result = {
  sleepingHours: string;
  timeOfSleep: string;
  wakeUpTime: string;
};

const Modal = ({ close, isLoggedIn }: any) => {
  const [data, setData] = useState({
    sleepingHours: '',
    timeOfSleep: '',
    wakeUpTime: '',
  });

  const [prevData, setPrevData] = useState<Result[]>([]);

  async function submitForm(e: any) {
    e.preventDefault();
    const newResult = { ...data };
    setPrevData((setPrevData) => [...setPrevData, newResult]);
    setData({
      sleepingHours: '',
      timeOfSleep: '',
      wakeUpTime: '',
    });
  }

  function loginInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  console.log(prevData);

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black'>
      <div className='bg-white p-4 rounded-lg overflow-auto max-h-96'>
        <button
          className='mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg'
          onClick={close}
        >
          X
        </button>
        <h2 className='text-2xl font-semibold mb-4'></h2>
        {isLoggedIn ? (
          <form className='flex flex-col items-center' onSubmit={submitForm}>
            <input
              type='text'
              placeholder='Enter Sleeping Hours'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none'
              onChange={loginInput}
              name='sleepingHours'
              value={data.sleepingHours}
              required
            />
            <input
              type='text'
              placeholder='Enter Time Of Sleep'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none mt-3 mb-3'
              onChange={loginInput}
              name='timeOfSleep'
              value={data.timeOfSleep}
              required
            />
            <input
              type='text'
              placeholder='Enter Wake Up Time'
              className='text-black border border-black p-3 rounded-2xl font-bold text-xl focus:outline-none'
              onChange={loginInput}
              name='wakeUpTime'
              value={data.wakeUpTime}
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
