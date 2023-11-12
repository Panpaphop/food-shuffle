import riceIcon from "../icons/rice.png";
import noodleIcon from "../icons/noodles.png";
import shuffleIcon from "../icons/shuffle.png";
import refreshIcon from "../icons/refresh.png";
import { useContext } from "react";
import { DataContext } from "../App";

const ShufflePage = () => {
    const { setAppState } = useContext(DataContext);
    return (
      <div className="bg-blue-200 rounded-lg w-[500px] h-[800px] flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold">Shuffle</h1>
        <div className="text-[25px] h-[40%] font-bold border border-solid border-black m-5 bg-white rounded-lg flex flex-col justify-around items-center">
          <img src={riceIcon} alt="Spicy" className="w-[30%] m-5" /> ข้าวอะไรดี
        </div>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300">
          <img src={shuffleIcon} alt="Both" className="w-[20%] m-5"/> Shuffle
        </button>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-5 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300"onClick={() => setAppState("spicyOrNot")}>
          <img src={refreshIcon} alt="Both" className="w-[20%] m-5"/> เลือกใหม่
        </button>
      </div>
    );
  };
  
  export default ShufflePage;
  