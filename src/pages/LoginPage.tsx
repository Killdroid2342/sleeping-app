import { useState } from 'react';
import Register from '../components/User-Forms/Register';
import Login from '../components/User-Forms/Login';

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
