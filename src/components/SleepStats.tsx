const SleepStats = ({ prevData }: any) => {
  return (
    <div className='ml-10'>
      <p className='text-center text-2xl font-bold'>Sleep Stats</p>
      <div className='flex flex-row'>
        <ul>
          <li className='text-center p-2 font-bold'>Date</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.date}
            </li>
          ))}
        </ul>
        <ul>
          <li className='text-center p-2 font-bold'>Bed Time</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.bedtime}
            </li>
          ))}
        </ul>
        <ul>
          <li className='text-center p-2 font-bold'>Wake Up Time</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.wakeUpTime}
            </li>
          ))}
        </ul>
        <ul>
          <li className='text-center p-2 font-bold'>Hours Of Sleep</li>
          {prevData.map((data: any, index: number) => (
            <li key={index} className='text-center'>
              {data.hoursofsleep}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SleepStats;
