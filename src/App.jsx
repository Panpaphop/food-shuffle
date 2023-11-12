import { useState } from "react";
import "./App.css";
import FilterPage from "./components/FilterPage";
import SpicyOrNotPage from "./components/SpicyOrNotPage";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-[30px] font-bold text-blue-500">Food Shuffle</h1>
    {/* <FilterPage/> */}
    <SpicyOrNotPage/>
    </div>
  );
}

export default App;
