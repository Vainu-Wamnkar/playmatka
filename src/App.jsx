import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/HomeSection/Navbar';
import Home from './pages/Home';
import AddMoney from './pages/AddMoney';
import AddBankDetails from './components/AccountSection/AddBankDetails';
import WithdrawMoney from './pages/WithdrawalMoney';
import GameRate from './pages/GameRate';
import Ragister from './components/Auth/Ragister';
import Login from './components/Auth/Login';
import { Toaster } from 'react-hot-toast'; 
import PlayGame from './components/AllSite/PlayGame';


const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/ragister', '/login'];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Ragister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addmoney" element={<AddMoney />} />
        <Route path="/bankdetails" element={<AddBankDetails />} />
        <Route path="/withdrawal" element={<WithdrawMoney />} />
        <Route path="/rate" element={<GameRate />} />
        <Route path="/ragister" element={<Ragister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play-game" element={<PlayGame/>}/>
      </Routes>

    </>
  );
};

function App() {
  return (
    <>    
      <Router>
        <AppContent />
      </Router>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
