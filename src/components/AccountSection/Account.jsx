import React from 'react';
import { FaMoneyBillWave, FaHandHoldingUsd } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md mt-6 text-center md:mt-20">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        {/* Add Money Button */}
        <Link
          to="/addmoney"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition duration-300 font-bold"
        >
          <FaMoneyBillWave className="text-xl" />
          Add Money
        </Link>

        {/* Withdraw Button */}
        <Link
          to="/withdrawal"
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300 font-bold"
        >
          <FaHandHoldingUsd className="text-xl" />
          Withdraw
        </Link>
      </div>
    </div>
  );
};

export default Account;
