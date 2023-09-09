import React from 'react';

const ResModal = (props: any) => {
  return (
    <div className='flex justify-center items-center bg-transparent'>
      <p className='text-3xl font-bold text-white mb-10'>
        {props.responseMessage}
      </p>
    </div>
  );
};

export default ResModal;
