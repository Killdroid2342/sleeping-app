import React, { useState } from 'react';
import axios from 'axios';
import ResModal from './UserFormModal/ResModal';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const { VITE_API_URL } = import.meta.env;

const Login = ({ changeForm }: any) => {
  const [login, setLogin] = useState({ username: '', password: '' });
  const [modal, setModal] = useState(false);

  const instance = axios.create({
    baseURL: VITE_API_URL,
  });
  const navigate = useNavigate();

  async function submitForm(e: any) {
    e.preventDefault();
    const res = await instance.post('/user/login-user', {
      username: login.username,
      clientpassword: login.password,
    });
    setModal(res.data.message);
    setTimeout(() => {
      setModal(false);
    }, 1000);
    Cookies.set('UserjwtToken', res.data.token);
    if (res.data.message === 'Correct Details') {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else return;
  }

  function loginInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <div className='h-screen backgroundForm flex items-center justify-center flex-col'>
      {modal !== false ? <ResModal responseMessage={modal} /> : ''}
      <div className='border border-white backdrop-blur-md bg-black bg-opacity-20 rounded-md w-80'>
        <h1 className='text-center mt-10 text-2xl text-white'>Login Here</h1>
        <form className='py-2' onSubmit={submitForm}>
          <div className='flex flex-col mx-auto w-fit'>
            <label className='text-lg py-2 font-semibold text-white'>
              Username
            </label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={loginInput}
              className='p-2 rounded-md text-black border border-neutral-300 bg-opacity-70 focus:outline-none'
              required
            />
          </div>
          <div className='flex flex-col mx-auto w-fit'>
            <label className='text-lg py-2 pt-5 font-semibold text-white'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={loginInput}
              className='p-2 rounded-md text-black border border-neutral-300 bg-opacity-70 focus:outline-none'
              required
            />
          </div>
          <div className='flex flex-col mx-auto w-fit'>
            <input
              type='submit'
              value='Login'
              className='mt-10 text-xl cursor-pointer font-semibold text-white'
            />
            <p
              className='mt-5 cursor-pointer font-semibold text-white text-center'
              onClick={changeForm}
            >
              Not A User? Register Here.
            </p>
            <p
              className='mt-5 cursor-pointer font-semibold text-white text-center p-3'
              onClick={() => navigate('/')}
            >
              Dont want to create an account? Click Here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
