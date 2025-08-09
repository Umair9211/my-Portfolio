import React from "react";

import { webProjects } from "../assets/js/dataArray";
import { useEffect, useContext } from "react";
import { BackgroundContext } from "../context/BackgroundContext.jsx";
import bgColors from "../assets/js/dataArray";
import CardList from "../components/CardList.jsx";
import Aboutme from "../components/Aboutme.jsx";
import { sectionData,boxColor } from "../assets/js/dataArray";
const Web = () => {
  const { setBg, setTheme,setBoxClr } = useContext(BackgroundContext);
  useEffect(() => {
    setBg(bgColors.web);
    setTheme("web");
    setBoxClr(boxColor.web);
  }, []);
  return (
    <>
      <title>Web | Umair's Portfolio</title>
      <div className="sec-sk-1 py-3">
        <div className="container p-3 ">
         <Aboutme description = {sectionData.web}/>
        </div>
      </div>
      <div className="sec-sk-2 py-5">
        <CardList title="Projects" data={webProjects} />
      </div>
    </>
  );
};

export default Web;
