import React from 'react';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative">
        
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
        
        <p className="text-white text-sm mt-4 text-center font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;