    import React from 'react';
    import { FaMoneyBillWave, FaHandHoldingUsd } from 'react-icons/fa';
    import { Link } from 'react-router-dom';

    const Account = () => {
    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white  shadow-md mt-6 text-center">


        <div className="flex  sm:flex-row justify-between">
            {/* Add Money Button */}
            <button className="flex font-bold items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition duration-300">
            <FaMoneyBillWave className="text-xl" />
                <Link to={"/addmoney"}> Add Money</Link>   
            </button>

            {/* Withdraw Button */}
            <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300 font-bold">
            <FaHandHoldingUsd className="text-xl" />
                <Link to={"/withdrawal"}>Withdraw</Link>
            </button>
        </div>
        </div>
    );
    };

    export default Account;
