import React from 'react';

const GameRate = () => {
  const rates = [
    'SINGLE 10 KA 95',
    'JODI 10 KA 950',
    'SINGLE PATTI 10 KA 1400',
    'DOUBLE PATTI 10 KA 2800',
    'TRIPPLE PATTI 10 KA 7000',
  ];

  return (
    <div className="w-full min-h-screen bg-orange-50 flex justify-center pt-16 ">
      <div className="w-full max-w-md bg-orange-100  shadow-md">
        <div className="bg-orange-700 text-white text-center font-semibold py-3 rounded-t-md text-lg">
          Matka Play Rate
        </div>
        <ul className="divide-y divide-orange-200 mt-6">
          {rates.map((rate, index) => (
            <li
              key={index}
              className="text-center text-base sm:text-base font-semibold py-3 text-orange-900"
            >
              {rate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameRate;
