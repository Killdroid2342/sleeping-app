import React, { useState } from 'react';

const Login = ({ changeForm }: any) => {
  const [login, setLogin] = useState({ username: '', password: '' });

  async function submitForm(e: any) {
    e.preventDefault();
    console.log(login);
  }

  function loginInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLogin((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <div className='h-screen backgroundForm flex items-center justify-center'>
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
              className='mt-5 cursor-pointer font-semibold text-white'
              onClick={changeForm}
            >
              Not A User? Register Here.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
