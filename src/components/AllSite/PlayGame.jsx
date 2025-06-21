import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const options = [
  'Single Ank',
  'Single Patti',
  'Double Patti',
  'Tripple Patti',
  'SP DP TP',
  'SP Motor',
  'DP Motor',
];

const PlayGame = () => {
  const navigate = useNavigate();

  const market = JSON.parse(localStorage.getItem('selectedMarket')); // 👈 fetched from localStorage

  return (
    <div className="min-h-screen bg-white px-4 pt-20">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-yellow-600 text-xl mr-2">
          <FaArrowLeft />
        </button>
        <h2 className="text-xl font-bold text-black">{market?.siteName || 'Game Options'}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {options.map((item, idx) => (
          <div
            key={idx}
            className="border-2 border-yellow-400 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-2">🎲</div>
            <p className="text-yellow-600 font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayGame;
