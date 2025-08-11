import 'bootstrap/dist/css/bootstrap.min.css';
import Web from './pages/Web.jsx'
import Layout from "./layout/layout.jsx";
import Home from "./pages/Home.jsx";
import bgColors from './assets/js/dataArray.js';
import "./styles/global.css";
import "./styles/components.css"
import Network from "./pages/Network.jsx";
import Cyber from "./pages/Cyber.jsx";
import Loader from './components/Loader.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for exactly 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      
      {/* App always renders in background while loader is showing */}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/web" element={<Web />} />
              <Route path="/net" element={<Network />} />
              <Route path="/cyber" element={<Cyber />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
