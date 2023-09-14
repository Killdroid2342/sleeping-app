import { LineChart, Line, YAxis, XAxis } from 'recharts';

const SleepDuration = ({ prevData, isLoggedIn }: any) => {
  return (
    <div className='mr-10'>
      <p className='text-center text-2xl font-bold'>Sleep Duration</p>
      {isLoggedIn ? (
        <LineChart width={400} height={400} data={prevData}>
          <Line type='monotone' dataKey='hoursofsleep' stroke='#6203fc' />
          <YAxis axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }} />
          <XAxis
            axisLine={{ stroke: 'white' }}
            tick={{ fill: 'white' }}
            dataKey='date'
          />
        </LineChart>
      ) : (
        <p>log in to see data</p>
      )}
    </div>
  );
};

export default SleepDuration;
