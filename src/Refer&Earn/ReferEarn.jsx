import Nav from "./Nav";
import Referral from "./Referral";
import WithDraw from "./WithDraw";
import HowItWorks from "./HowItWorks";

function ReferEarn() {
  return (
    <div className="">
      <Nav />
      <div className=" md:flex gap-16 items-center md:px-28 ">
        <WithDraw />
        <Referral />
      </div>
      
      <HowItWorks />
    </div>
  );
}
export default ReferEarn;
