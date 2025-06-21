import React from 'react';
import { FaStar, FaCrown, FaPhoneAlt } from 'react-icons/fa';

const BottomGame = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white z-48 shadow-inner">
      <div className="max-w-md mx-auto flex justify-around items-center py-3">
        
        <button className="flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-[#D2691E] rounded-full shadow hover:bg-gray-100 transition">
          <FaStar />
          Star Line
        </button>

        <button className="flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-[#D2691E]  rounded-full shadow hover:bg-gray-100 transition">
          <FaCrown />
          Dp Boss
        </button>

        <button className="flex items-center gap-2 text-sm font-semibold px-4 py-2 bg-[#D2691E]  rounded-full shadow hover:bg-gray-100 transition">
          <FaPhoneAlt />
          Contact Us
        </button>
        
      </div>
    </div>
  );
};

export default BottomGame;
