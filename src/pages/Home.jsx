import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = ({corns, setCorns}) => {




  React.useEffect(() => {
    if(location.state?.newCorn) {
      setCorns(prev => [...prev, location.state.newCorn]);
    }
  }, [location.state]

);


  return (

    <div>
        <Sidebar />
        <Header />

        <main className='ml-[120px] mt-[85px] p-5 flex justify-center'>
          <Cards corns={corns} setCorns={setCorns} />
        </main>

    </div>




  )
}

export default Home