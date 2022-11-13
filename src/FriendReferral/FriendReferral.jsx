import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Wallet from "./Wallet";
import FriendWhoEnrolled from "./FriendWhoEnrolled";

function FriendReferral() {
  return (
    <div className="px-8 md:px-28">
      <p className=" text-sm my-10">
        UI/UX {">"} Refer & Earn {">"} Friends Referrad
      </p>

      <div>
        <div className="text-[#800080] flex justify-start">
          <Link to="/" className="flex items-center justify-start  gap-2 ">
            <BiArrowBack />
            go back
          </Link>
        </div>
        <Wallet />
        <FriendWhoEnrolled />
      </div>
    </div>
  );
}
export default FriendReferral;
