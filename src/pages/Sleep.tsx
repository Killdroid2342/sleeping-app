import Nav from '../components/Nav';
import '../index.css';

const Main = () => {
  return (
    <div className='background h-screen'>
      <Nav />
      <div className='p-4 flex flex-col items-center justify-center flex-1'>
        <h1 className='text-center text-2xl font-bold text-white'>
          Sleep Tracker
        </h1>
      </div>
    </div>
  );
};

export default Main;
