import React from 'react'
import { useEffect, useContext } from "react";
import { BackgroundContext } from "../context/BackgroundContext.jsx";
import bgColors from "../assets/js/dataArray";
import { sectionData,netProjects,netCert,boxColor } from '../assets/js/dataArray';
import Aboutme from '../components/Aboutme.jsx';
import CardList from "../components/CardList.jsx";
const Network = () => {
  const {setBg,setTheme,setBoxClr} = useContext(BackgroundContext);
  useEffect(() => {
    setBg(bgColors.network);
      setTheme("network");
    setBoxClr(boxColor.network);
  }, []);
  return (
    <>        <title>Network | Umair's Portfolio</title>
  <div className="sec-sk-1 py-3">
        <div className="container p-3 ">
         <Aboutme description = {sectionData.net}/>
        </div>
      </div>
         <div className="sec-sk-2 py-5">
        <CardList title="Projects" data={netProjects} />
      </div>
      <div className="py-3">
<CardList title="Certifications" data={netCert} />
      </div>
</>
  )
}

export default Network