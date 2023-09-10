import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Nav({ clientUsername }: any) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navClick = () => {
    setOpen(!open);
  };

  const [isTransformed, setTransform] = useState(false);

  const toggleTransform = () => {
    setTransform(!isTransformed);
  };

  const logOut = () => {
    Cookies.remove('UserjwtToken');
    navigate('/LoginPage');
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-0 bg-stone-900 text-white transition-all transform ease-in-out duration-300 ${
        open ? 'w-64' : ''
      }`}
    >
      <div onClick={navClick} className='mt-10 ml-10'>
        <div className='cursor-pointer' onClick={toggleTransform}>
          <div
            className={`w-8 h-1 bg-white mb-1 transition-transform transform ${
              isTransformed ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div className={`w-8 h-1 bg-white mb-1 opacity-100`}></div>
          <div
            className={`w-8 h-1 bg-white ${
              isTransformed ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </div>
      </div>
      {open && (
        <ul>
          <li className='mt-20 text-white font-bold text-xl text-center'>
            {`Account: ${clientUsername}`}
          </li>
          <li
            className='mt-5 text-white text-center cursor-pointer'
            onClick={() => navigate('/')}
          >
            Sleep
          </li>
          <li
            className='mt-5 text-white text-center cursor-pointer'
            onClick={() => navigate('/alarmclock')}
          >
            Alarm Clock
          </li>
          <li
            className='mt-5 text-white text-center cursor-pointer'
            onClick={() => navigate('/LoginPage')}
          >
            Login/Sign-Up
          </li>
          <li
            className='mt-5 text-white text-center cursor-pointer'
            onClick={logOut}
          >
            Log Out
          </li>
        </ul>
      )}
    </div>
  );
}

export default Nav;
