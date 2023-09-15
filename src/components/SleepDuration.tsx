import { LineChart, Line, YAxis, XAxis } from 'recharts';

const SleepDuration = ({ prevData }: any) => {
  return (
    <div className='mr-10'>
      <p className='text-center text-2xl font-bold'>Sleep Duration</p>
      <LineChart width={400} height={400} data={prevData}>
        <Line type='monotone' dataKey='hoursofsleep' stroke='#6203fc' />
        <YAxis axisLine={{ stroke: 'white' }} tick={{ fill: 'white' }} />
        <XAxis
          axisLine={{ stroke: 'white' }}
          tick={{ fill: 'white' }}
          dataKey='date'
        />
      </LineChart>
    </div>
  );
};

export default SleepDuration;
