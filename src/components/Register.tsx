import React, { useState } from 'react';

const Register = ({ changeForm }: any) => {
  const [register, setRegister] = useState({
    username: '',
    password: '',
  });
  async function submitRegForm(e: any) {
    e.preventDefault();
    console.log(register);
  }

  function loginRegInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setRegister((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <div className='h-screen backgroundForm flex items-center justify-center'>
      <div className='border border-white backdrop-blur-md bg-black bg-opacity-20 rounded-md w-80'>
        <h1 className='text-center mt-10 text-2xl text-white'>Register Here</h1>
        <form className='py-2' onSubmit={submitRegForm}>
          <div className='flex flex-col mx-auto w-fit'>
            <label className='text-lg py-2 font-semibold text-white'>
              Username
            </label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              onChange={loginRegInput}
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
              onChange={loginRegInput}
              className='p-2 rounded-md text-black border border-neutral-300 bg-opacity-70 focus:outline-none'
              required
            />
          </div>
          <div className='flex flex-col mx-auto w-fit'>
            <input
              type='submit'
              value='Create Account'
              className='mt-10 text-xl cursor-pointer font-semibold text-white'
            />
            <p
              className='mt-5 cursor-pointer font-semibold text-white'
              onClick={changeForm}
            >
              Have An Account? Login Here.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
