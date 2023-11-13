import riceIcon from "../icons/rice.png";
import noodleIcon from "../icons/noodles.png";
import bothIcon from "../icons/cutlery.png";
import { useContext } from "react";
import { DataContext } from "../App";

const RiceOrNoodlePage = () => {
  const { setAppState, riceOrNoodle, setRiceOrNoodle } = useContext(DataContext);
  const handleButtonClick = (riceOrNoodleValue) => {
    setRiceOrNoodle(riceOrNoodleValue);
    setAppState("shuffle");
  };
    return (
      <div className="bg-blue-200 rounded-lg w-[500px] h-[800px] flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold">ข้าวหรือเส้น ?</h1>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300 "onClick={() => handleButtonClick("rice")}>
          <img src={riceIcon} alt="Spicy" className="w-[30%] m-5" /> ข้าว
        </button>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300"onClick={() => handleButtonClick("noodle")}>
          <img src={noodleIcon} alt="Non-Spicy" className="w-[30%] m-5"/> เส้น
        </button>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300"onClick={() => handleButtonClick("both")}>
          <img src={bothIcon} alt="Both" className="w-[30%] m-5"/> ได้หมด
        </button>
      </div>
    );
  };
  
  export default RiceOrNoodlePage;
  