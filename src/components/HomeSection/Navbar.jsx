import React, { useState, useEffect } from 'react';
import { FaBars,FaUserCircle, FaTimes, FaHome, FaWallet, FaGamepad, FaSignOutAlt, FaMoneyCheckAlt } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('userData')) || { name: '', mobileNumber: '' };

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showSidebar]);

  const handleHome = () => navigate('/home');

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    navigate("/");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#D2691E] text-white flex items-center justify-between px-6 py-4 shadow-md z-50">
        <div className="flex items-center gap-4">
          <FaBars className="text-2xl cursor-pointer" onClick={() => setShowSidebar(true)} />
          <span className="text-xl font-bold cursor-pointer" onClick={handleHome}>Satta777</span>
        </div>
        <div className='border-2 px-6 rounded-lg bg-green-300 border-gray-600 '>
          <h1 className="text-2xl cursor-pointer text-gray-800 font-bold ">₹ 4</h1>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full px-6 w-64 bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} `}>
        <div className="flex items-center justify-between p-4 border-b ">
          <h2 className="text-xl font-bold text-white ">My Profile</h2>
          <FaTimes className="text-white cursor-pointer" onClick={() => setShowSidebar(false)} />
        </div>

        <div className="p-4 ">
          <div className="flex items-center gap-3 mb-4 ">
            <FaUserCircle className="text-4xl text-white" />
            <div className=''>
              <p className="font-semibold text text-xl text-white">{storedData?.name}</p>
              <p className='text-xl font-bold text-gray-300'>{storedData?.mobileNumber}</p>
            </div>
          </div>

          <ul className="flex flex-col gap-6 mt-6 text-xl">
            <li>
              <Link to="/home" className="flex items-center gap-3 text-white hover:text-[#D2691E]" onClick={() => setShowSidebar(false)}>
                <FaHome className='text-3xl mr-2'/> Home
              </Link>
            </li>
            <li>
              <Link to="/addmoney" className="flex items-center gap-3 text-white hover:text-[#D2691E]" onClick={() => setShowSidebar(false)}>
                <FaWallet className='text-3xl mr-2'/> Add Money
              </Link>
            </li>
            <li>
              <Link to="/withdrawal" className="flex items-center gap-3 text-white hover:text-[#D2691E]" onClick={() => setShowSidebar(false)}>
                <FaMoneyCheckAlt className='text-3xl mr-2'/> Withdraw Money
              </Link>
            </li>
            <li>
              <Link to="/bankdetails" className="flex items-center gap-3 text-white hover:text-[#D2691E]" onClick={() => setShowSidebar(false)}>
                <FaWallet className='text-3xl mr-2'/> Add Bank Account
              </Link>
            </li>
            <li>
              <Link to="/rate" className="flex items-center gap-3 text-white hover:text-[#D2691E]" onClick={() => setShowSidebar(false)}>
                <FaGamepad className='text-3xl mr-2'/> Game Rate
              </Link>
            </li>
            <li
              className="flex items-center gap-3 text-white hover:text-red-600 cursor-pointer"
              onClick={handleLogOut}
            >
              <FaSignOutAlt className='text-3xl mr-2'/> Logout
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setShowSidebar(false)} />}
    </>
  );
};

export default Navbar;
