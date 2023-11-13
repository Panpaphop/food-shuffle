import riceIcon from "../icons/rice.png";
import noodleIcon from "../icons/noodles.png";
import shuffleIcon from "../icons/shuffle.png";
import refreshIcon from "../icons/refresh.png";
import foodIcon from "../icons/cutlery.png"
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import { foodData } from "../Data/FoodData.js";

const ShufflePage = () => {
    const { appState, setAppState, spiciness, setSpiciness, riceOrNoodle, setRiceOrNoodle } = useContext(DataContext);
    const [shuffledFood, setShuffledFood] = useState(null);

    const shuffleFood = () => {
        console.log("spiciness:", spiciness);
        console.log("riceOrNoodle:", riceOrNoodle);
    
        const filteredFood = foodData.filter(
          (food) =>
            (spiciness === "spicy" && food.isSpicy) ||
            (spiciness === "notSpicy" && !food.isSpicy) ||
            spiciness === "both" ||
            spiciness === "either"
        );
      
        const filteredRiceOrNoodleFood = filteredFood.filter(
          (food) =>
            (riceOrNoodle === "rice" && food.isRice) ||
            (riceOrNoodle === "noodle" && !food.isRice) ||
            riceOrNoodle === "both" ||
            riceOrNoodle === "either"
        );
      
        // Log the filtered data for debugging
        console.log("Filtered Food:", filteredFood);
        console.log("Filtered RiceOrNoodle Food:", filteredRiceOrNoodleFood);
      
        if (filteredRiceOrNoodleFood.length > 0) {
          const randomIndex = Math.floor(Math.random() * filteredRiceOrNoodleFood.length);
          const randomFood = filteredRiceOrNoodleFood[randomIndex];
          console.log("Selected Food:", randomFood);
          setShuffledFood(randomFood);
        } else {
          setShuffledFood(null);
        }
      };
      useEffect(() => {
        if (appState === "shuffle") {
          shuffleFood();
        }
      }, [appState]);

    return (
      <div className="bg-blue-200 rounded-lg w-[450px] h-[800px] flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold">กินอะไรดี?</h1>
        <div className="text-[25px] h-[40%] font-bold border border-solid border-black mt-14 mb-3 ml-8 mr-8 bg-white rounded-lg flex flex-col justify-around items-center">
          <img src={foodIcon} alt="Spicy" className="w-[30%] m-5" /> {shuffledFood ? shuffledFood.name : "กด Shuffle เพื่อสุ่ม"}
        </div>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-3 ml-8 mr-8 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300"onClick={() => shuffleFood()}>
          <img src={shuffleIcon} alt="Both" className="w-[20%] m-5"/> Shuffle
        </button>
        <button className="image-button text-[25px] font-bold border border-solid border-black m-3 ml-8 mr-8 bg-gray-200 rounded-lg flex flex-row justify-around items-center focus:bg-gray-300"onClick={() => setAppState("spicyOrNot")}>
          <img src={refreshIcon} alt="Both" className="w-[20%] m-5"/> เลือกใหม่
        </button>
      </div>
    );
  };
  
  export default ShufflePage;
  