import { createContext } from "react";
import { useState } from "react";
import "./App.css";
import FilterPage from "./components/FilterPage";
import SpicyOrNotPage from "./components/SpicyOrNotPage";
import RiceOrNoodlePage from "./components/RiceOrNoodlePage";
import ShufflePage from "./components/ShufflePage";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("spicyOrNot");
  const [score, setScore] = useState(0);
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-[30px] font-bold text-blue-500">Food Shuffle</h1>
    {appState === "spicyOrNot" && <SpicyOrNotPage />}
    {appState === "riceOrNoodle" && <RiceOrNoodlePage/>}
    {appState === "shuffle" && <ShufflePage/>}
    </div>
    </DataContext.Provider>
   
  );
}

export default App;
