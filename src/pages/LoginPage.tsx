import { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';

const LoginPage = () => {
  const [form, setForm] = useState('Register');

  const changeForm = () => {
    if (form === 'Register') {
      setForm('Login');
    } else {
      setForm('Register');
    }
  };
  return (
    <>
      {form === 'Register' ? (
        <Login changeForm={changeForm} />
      ) : (
        <Register changeForm={changeForm} />
      )}
    </>
  );
};

export default LoginPage;
