const Wallet = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 mt-10">
        <div className={" flex flex-col space-y-2 md:text-2xl  "}>
          <h1 className={" text-[#800080] "}>Your Referral Code</h1>

          <div
            className={
              " flex space-x-2 md:space-x-6 w-full justify-center  border-2 rounded-md p-2 md:py-3 border-black "
            }
          >
            <span>E</span>
            <span>D</span>
            <span>C</span>
            <span>H</span>
            <span>5</span>
            <span>4</span>
          </div>
        </div>

        <div className="shadow-md p-3 rounded-xl text-xl  md:text-2xl md:p-5">
          <h2 className="text-[#800080]">Wallet Balance</h2>
          <p className="">₹ 500</p>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
