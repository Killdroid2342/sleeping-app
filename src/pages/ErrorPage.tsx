const ErrorPage = () => {
  return (
    <div className='flex h-screen bg-neutral-200 items-center justify-center'>
      <div className='flex flex-col'>
        <h1 className='text-center text-gray-800 text-9xl'>404 error</h1>
        <p className='text-center p-10 text-2xl'>This page doesn't exist</p>
        <p className='text-center text-2xl'>
          Would you like to{' '}
          <a
            className='text-red-900 cursor-pointer'
            href='https://www.codecademy.com/article/http-errors-404'
          >
            learn about HTTP errors?
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
