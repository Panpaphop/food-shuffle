import { useContext } from "react";
const FilterPage = () => {
  return (
    <div className="bg-blue-200 rounded-lg w-[500px] h-[800px] flex flex-col justify-center items-center">
     <div>
        <label htmlFor="spiciness">กินเผ็ดไหม?</label>
        <select id="spiciness" className="mt-2 p-2 border rounded-md">
          <option value="spicy">เผ็ด</option>
          <option value="not-spicy">ไม่เผ็ด</option>
          <option value="both">ได้หมด</option>
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="foodType">ข้าวหรือเส้น</label>
        <select id="foodType" className="mt-2 p-2 border rounded-md">
          <option value="rice">ข้าว</option>
          <option value="noodle">เส้น</option>
          <option value="both">ได้หมด</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPage;