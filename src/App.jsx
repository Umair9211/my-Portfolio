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
const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
  },[]);

return (
  <>
    {loading ? (
      <Loader />
    ) : (
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
    )}
  </>
);

}

export default App;
