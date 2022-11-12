import Button from "./Button";

function WithDraw() {
  return (
    <div className="px-9 py-5 mt-10 md:px-0 max-w-xl">
      <div className="flex flex-wrap gap-10 shadow-xl rounded-md p-6 md:p-10 ">
        <div className="space-y-2">
          <h2 className="text-[#800080]">Referral Earning</h2>
          <p className="text-4xl">₹ 2,500</p>
        </div>
        <div className="self-end space-y-2">
          <h2 className="text-[#800080]">Total Referrals</h2>
          <p className="text-4xl">7</p>
        </div>

        <div className="space-y-2 ">
          <h2 className="text-[#800080]">Wallet Balance</h2>
          <p className="text-4xl">₹ 500</p>
        </div>
        <div className="self-center ">
          <Button className={" rounded-full"}> Withdraw Balance </Button>
        </div>
      </div>
    </div>
  );
}
export default WithDraw;

// bg-white p-5 rounded-md space-y-5 shadow-2xl shadow-[#E5E5E5] md:flex flex-wrap items-center max-w-md
