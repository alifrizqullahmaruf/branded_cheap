import React from 'react';

const CardList = ({ children }) => {
  return (
    <div className='p-6  w-full max-w-4xl bg-blue-500 text-white rounded-lg shadow-lg'>
      {children}
    </div>
  );
};

export default CardList;
