import spicyIcon from "../icons/chili.png";
import nonSpicyIcon from "../icons/spicy.png";
import bothIcon from "../icons/cutlery.png";
import { useContext } from "react";
import { DataContext } from "../App";
const SpicyOrNotPage = () => {
  const { setAppState } = useContext(DataContext);
    return (
      <div className="bg-blue-200 rounded-lg w-[500px] h-[800px] flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold">กินเผ็ดไหม ?</h1>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300 " onClick={() => setAppState("riceOrNoodle")}>
          <img src={spicyIcon} alt="Spicy" className="w-[30%] m-5" /> เผ็ด
        </button>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300 "onClick={() => setAppState("riceOrNoodle")}>
          <img src={nonSpicyIcon} alt="Non-Spicy" className="w-[30%] m-5"/> ไม่เผ็ด
        </button>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300"onClick={() => setAppState("riceOrNoodle")}>
          <img src={bothIcon} alt="Both" className="w-[30%] m-5"/> ได้หมด
        </button>
      </div>
    );
  };
  
  export default SpicyOrNotPage;
  