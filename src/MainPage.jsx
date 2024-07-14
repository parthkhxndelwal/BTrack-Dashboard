import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import btrackLogo from '/src/assets/logo/BTRACK.png';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import Loader from './components/componentLoader';
import Sidebar from './components/Sidebar';
import Bottombar from './components/Bottombar';
// Importing subPages
import Account from '/src/pages/dashboardSubPages/Account.jsx';
import Attendance from '/src/pages/dashboardSubPages/Attendance.jsx';
import Fees from '/src/pages/dashboardSubPages/Fees.jsx';
import Home from '/src/pages/dashboardSubPages/Home.jsx';
import Schedule from '/src/pages/dashboardSubPages/Schedule.jsx';

const subPages = {
  Home,
  Account,
  Attendance,
  Fees,
  Schedule
};

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [loading, setLoading] = useState(true);
  const loadingBarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname.split('/')[2] || 'Home';

  const handleSetActive = (newActive) => {
    setLoading(true);
    loadingBarRef.current.continuousStart(0, 500);
    navigate(`/dashboard/${newActive}`);
    setTimeout(() => {
      loadingBarRef.current.complete();
    }, 400);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [location.pathname]);

  const renderSubPage = () => {
    const SubPageComponent = subPages[active];
    return <SubPageComponent handleSetActive={(newActive) => handleSetActive(newActive)} />;
  };

  return (
    <>
      <div className="app">
        <LoadingBar color="#000000" height={4} ref={loadingBarRef} style={{ boxShadow: 'none' }} />
        <Sidebar subPages={subPages} handleSetActive={handleSetActive} active={active} />
        <div className="mainContent">
          <Navbar heading={active} setSearchQuery={setSearchQuery} />
          <div className="load">
            {loading ? <Loader /> : renderSubPage()}
          </div>
          <Bottombar subPages={subPages} handleSetActive={handleSetActive} active={active} />
        </div>
      </div>
    </>
  );
}
