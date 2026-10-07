import React from 'react';

const Loading = () => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
