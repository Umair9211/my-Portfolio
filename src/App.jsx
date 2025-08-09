import 'bootstrap/dist/css/bootstrap.min.css';
import Web from './pages/Web.jsx'
import Layout from "./layout/layout.jsx";
import Home from "./pages/Home.jsx";
import bgColors from './assets/js/dataArray.js';
import "./styles/global.css";
import "./styles/components.css"
import Network from "./pages/Network.jsx";
import Cyber from "./pages/Cyber.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web/>} />
          <Route path="/net" element={<Network/>} />
          <Route path="/cyber" element={<Cyber/>} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
