import { decodeToken } from 'react-jwt';
import Nav from '../components/Nav';
import '../index.css';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import SleepDuration from '../components/SleepDuration';
import SleepStats from '../components/SleepStats';
import { useNavigate } from 'react-router-dom';
const { VITE_API_URL } = import.meta.env;
import axios from 'axios';

type Result = {
  sleepingHours: string;
  timeOfSleep: string;
  wakeUpTime: string;
};
const instance = axios.create({
  baseURL: VITE_API_URL,
});
const Main = () => {
  const [clientUsername, setClientUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prevData, setPrevData] = useState<Result[]>([]);
  const navigate = useNavigate();
  console.log(prevData);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };
  async function deleteData() {
    const res = await instance.post('sleepData/deleteSleepData', {
      clientUsername: clientUsername,
    });
    console.log(res);
    console.log('u deleted data');
  }
  async function getData() {
    const res = await instance.post('sleepData/getSleepData', {
      clientUsername: clientUsername,
    });
    setPrevData(res.data);
  }

  useEffect(() => {
    username();
  }, []);

  useEffect(() => {
    if (clientUsername) {
      getData();
    }
  }, [clientUsername]);
  return (
    <div className='background h-screen'>
      <Nav clientUsername={clientUsername} />
      <div className='p-4 flex flex-col items-center justify-center flex-1'>
        <h1 className='text-center text-3xl font-bold text-white'>
          Sleep Tracker
        </h1>
        <form action=''>
          <input
            type='button'
            value='New Entry +'
            className='text-white border border-white p-3 rounded-2xl font-bold text-xl mt-10'
            onClick={openModal}
          />
          <input
            type='button'
            value='Delete Data'
            className='text-white border border-white p-3 rounded-2xl font-bold text-xl mt-10'
            onClick={deleteData}
          />
        </form>
        {isModalOpen && (
          <Modal
            close={close}
            isLoggedIn={isLoggedIn}
            prevData={prevData}
            setPrevData={setPrevData}
            clientUsername={clientUsername}
          />
        )}
        {isLoggedIn ? (
          <div className='flex flex-row justify-center border border-white mt-56'>
            <div className=' text-white border-r border-white'>
              <SleepDuration prevData={prevData} isLoggedIn={isLoggedIn} />
            </div>
            <div className='text-white'>
              <SleepStats prevData={prevData} isLoggedIn={isLoggedIn} />
            </div>
          </div>
        ) : (
          <p className='text-white mt-80 text-3xl border border-white p-4 rounded-2xl '>
            Log in
            <a
              className='cursor-pointer font-bold'
              onClick={() => navigate('/LoginPage')}
            >
              {' Here '}
            </a>
            To Show Sleep Data
          </p>
        )}
      </div>
    </div>
  );
};

export default Main;
