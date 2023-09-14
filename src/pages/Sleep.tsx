import { decodeToken } from 'react-jwt';
import Nav from '../components/Nav';
import '../index.css';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import SleepDuration from '../components/SleepDuration';
import SleepStats from '../components/SleepStats';
type Result = {
  sleepingHours: string;
  timeOfSleep: string;
  wakeUpTime: string;
};

const Main = () => {
  const [clientUsername, setClientUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prevData, setPrevData] = useState<Result[]>([]);

  const username = () => {
    const getJWT = Cookies.get('UserjwtToken');
    if (getJWT) {
      const decodedTokenUsername = (decodeToken(getJWT) as { username: string })
        .username;
      setClientUsername(decodedTokenUsername);
      setIsLoggedIn(true);
    } else {
      setClientUsername('Not Logged In. Log in to use all features');
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    username();
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='background h-screen'>
      <Nav clientUsername={clientUsername} />
      <div className='p-4 flex flex-col items-center justify-center flex-1'>
        <h1 className='text-center text-3xl font-bold text-white'>
          Sleep Tracker
        </h1>
        <input
          type='button'
          value='New Entry +'
          className='text-white border border-white p-3 rounded-2xl font-bold text-xl mt-10'
          onClick={openModal}
        />
        {isModalOpen && (
          <Modal
            close={close}
            isLoggedIn={isLoggedIn}
            prevData={prevData}
            setPrevData={setPrevData}
          />
        )}
        <div className='flex flex-row justify-center border border-white mt-56'>
          <div className=' text-white border-r border-white'>
            <SleepDuration prevData={prevData} isLoggedIn={isLoggedIn} />
          </div>
          <div className=' text-white '>
            <SleepStats prevData={prevData} isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
