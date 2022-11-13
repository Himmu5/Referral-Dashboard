import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";

function Nav() {
  return (
    <div className="bg-white pb-4 md:px-16 ">
      <div className="h-50  pt-16">
        <div className="flex justify-between items-center">
          <img src="/image1.png" className="h-12 " alt="" />

          <div className="flex  items-center space-x-5 mr-9 md:0">
            <div className=" hidden md:flex space-x-5 text-[#80008040]">
              <p>My Assignment</p>
              <p>Chat with Mentor</p>
            </div>

            <Button className="flex items-center justify-center gap-2 mr-4 md:bg-white md:text-[#800080] ">
              <span className="hidden md:flex">
                <img src="/Profile.png" alt="" />
              </span>
              <span>ProfileName </span> <FiChevronDown />
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Nav;
