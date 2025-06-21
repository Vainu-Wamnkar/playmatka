import React from 'react';

const Moving = () => {
  return (
    <div className="mt-4 overflow-hidden whitespace-nowrap  border-gray-300 mt-20">
      <div className="inline-block animate-marquee">
        {/* Repeat twice for seamless scroll */}
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>

        {/* Repeat again for seamless looping */}
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
        <span className="text-4xl font-bold text-blue-700 mr-12">Welcome</span>
      </div>
    </div>
  );
};

export default Moving;
