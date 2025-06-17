import React from 'react';
import SlideImage from '../components/HomeSection/SlideImage';
import Account from '../components/AccountSection/Account';
import Allmarket from '../components/AllSite/Allmarket';
import BottomGame from '../components/BotomGame';

const Home = () => {
  return (
    <>
      <SlideImage />
      <Account />
      <Allmarket />
      <BottomGame />
    </>
  );
};

export default Home;
