const GradientCom = ({item}) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FF864C] to-[#800080] text-white rounded-xl p-6 mt-5">
        <div className="flex justify-between ">
          <p>{item.name}</p>
          <p>{item.date}</p>
        </div>
        <div className="mt-4 ">
          <h1 className="text-sm">Courses Enrolled(6)</h1>
          <div className="flex flex-wrap gap-2 my-4 ">
            {item.skils.map((item) => {
              return (
                <div className=" border-2 border-white rounded-xl py-1  px-2 text-sm">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 my-4">
            <p>Referral Amount </p>
            <p>{item.Amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GradientCom;
