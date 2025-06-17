import React, { useState, useEffect } from 'react';
import { FaBars, FaUserCircle, FaTimes } from 'react-icons/fa';
import { IoNotificationsSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [showSidebar]);

  const handleHome = () => navigate('/');

  const handleLogOut=()=>{
    localStorage.removeItem('userData');
    navigate("/")
  }
  

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
      <div className={`fixed top-0 left-0 h-full px-6 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-[#D2691E]">My Profile</h2>
          <FaTimes className="text-gray-700 cursor-pointer" onClick={() => setShowSidebar(false)} />
        </div>

        <div className="p-4 ">
          <div className="flex items-center gap-3 mb-4">
            <FaUserCircle className="text-4xl text-[#D2691E]" />
            <div>
              <p className="font-semibold text-[#D2691E] text-xl">{storedData.name}</p>
            </div>
          </div>

          <ul className="flex flex-col gap-6 mt-6 text-xl">
            <li><Link to="/addmoney" className="text-gray-700 hover:text-[#D2691E]" onClick={()=>setShowSidebar(false)}>Add Money</Link></li>
            <li><Link to="/withdrawal" className="text-gray-700 hover:text-[#D2691E]" onClick={()=>setShowSidebar(false)}>Withdraw Money</Link></li>
            <li><Link to="/bankdetails" className="text-gray-700 hover:text-[#D2691E]" onClick={()=>setShowSidebar(false)}>Add Bank Account</Link></li>
            <li><Link to="/rate" className="text-gray-700 hover:text-[#D2691E]" onClick={()=>setShowSidebar(false)}>Game Rate</Link></li>
            <li className="text-gray-700 hover:text-red-600 cursor-pointer" onClick={handleLogOut}>Logout</li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setShowSidebar(false)} />}
    </>
  );
};

export default Navbar;
