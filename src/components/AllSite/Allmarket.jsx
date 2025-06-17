import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

function Allmarket() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setMarkets(data))
      .catch(err => console.error('Failed to load data.json:', err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 h-auto">
      {markets.map((market, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          {/* Market Name & Time */}
          <div className="mb-3">
            <h2 className="text-xl font-semibold text-orange-700">{market.siteName}</h2>
            <p className="text-sm text-gray-600">Current Time: {market.currentTime}</p>
            <p className="text-xl font-bold text-blue-600 mt-1">{market.marketNumber}</p>
          </div>

          {/* Timings */}
          <div className="flex justify-between text-sm text-gray-800 mb-3">
            <div>
              <p className="font-medium">Open</p>
              <p>{market.openTime}</p>
            </div>
            <div>
              <p className="font-medium">Close</p>
              <p>{market.closeTime}</p>
            </div>
          </div>

          {/* Status and Button */}
          <div className="flex items-center justify-between">
            <p
              className={`font-medium ${
                market.currentStatus === 'Market is running'
                  ? 'text-green-600'
                  : market.currentStatus === 'Closed for today'
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }`}
            >
              {market.currentStatus}
            </p>

            <button
              className={`flex items-center gap-2 ${
                market.currentStatus === 'Market is running'
                  ? 'bg-orange-600 hover:bg-orange-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white text-sm px-4 py-2 rounded-full transition`}
              disabled={market.currentStatus !== 'Market is running'}
            >
              <FaPlay className="text-sm" />
              Play Game
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Allmarket;
