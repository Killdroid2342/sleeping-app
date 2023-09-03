import Nav from '../components/Nav';
import '../index.css';

const Main = () => {
  return (
    <div className='flex h-screen background'>
      <Nav />
      <div className='flex-1 p-4'>
        <h1 className='text-center text-2xl font-bold text-white'>
          Sleep Tracker
        </h1>
        {/* this page is the  sleep duration and the sleep stats*/}
      </div>
    </div>
  );
};

export default Main;
