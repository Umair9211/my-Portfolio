import React from 'react'
import { useEffect, useContext } from "react";
import { BackgroundContext } from "../context/BackgroundContext.jsx";
import bgColors from "../assets/js/dataArray";
import { sectionData } from '../assets/js/dataArray';
import CardList from '../components/CardList.jsx';
import Aboutme from '../components/Aboutme.jsx';
import { cyberCert,boxColor } from '../assets/js/dataArray';
const Cyber = () => {
  const {setBg,setTheme,setBoxClr} = useContext(BackgroundContext);
  useEffect(() => {
    setBg(bgColors.cybersecurity);
    setTheme("cybersecurity");
    setBoxClr(boxColor.cybersecurity);
  }, []);
  return (
   <>        <title>Cyber | Umair's Portfolio</title>
  <div className="sec-sk-1 py-3">
        <div className="container p-3 ">
         <Aboutme description = {sectionData.cyber}/>
        </div>
      </div>
      <div className="py-3">
<CardList title="Certifications" data={cyberCert} />
      </div>
</>
  )
}

export default Cyber