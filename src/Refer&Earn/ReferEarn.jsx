import Nav from "./Nav";
import Referral from "./Referral";
import WithDraw from "./WithDraw";
import HowItWorks from "./HowItWorks";

function ReferEarn() {
  return (
    <div className="">
      <p className=" text-sm mt-10 px-9 md:px-28">
        UI/UX {">"} Refer & Earn 
      </p>
      <div className="md:flex gap-16 items-center md:px-28 ">
        <WithDraw />
        <Referral />
      </div>

      <HowItWorks />
    </div>
  );
}
export default ReferEarn;
