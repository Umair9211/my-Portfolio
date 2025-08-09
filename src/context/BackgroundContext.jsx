import { createContext,useState } from "react";
import bgColors from "../assets/js/dataArray";
import { boxColor } from "../assets/js/dataArray";
export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
const [bg,setBg] = useState(bgColors.default);
const [theme,setTheme] = useState("default");
const [BoxClr,setBoxClr] = useState(boxColor.default);
return (
<BackgroundContext.Provider value={{bg,setBg,theme,setTheme,BoxClr,setBoxClr}}>
{children}


</BackgroundContext.Provider>


)

}