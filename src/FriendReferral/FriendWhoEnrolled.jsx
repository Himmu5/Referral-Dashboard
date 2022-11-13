import GradientCom from "./GradientCom";

const FriendWhoEnrolled = () => {
  let data = [
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      skils: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
      Amount: "₹185",
    },
    {
      name: "Subhash Mishra",
      date: "15 Sep, 2022",
      skils: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
      ],
      Amount: "₹485",
    },
    {
      name: "Prafull Kumar",
      date: "16 Sep, 2022",
      skils: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
      ],
      Amount: "₹485",
    },
  ];

  return (
    <div className="mt-24 ">
      <div>
        <h1 className="text-xl md:text-3xl text-[#800080] ">
          Friends who Enrolled(3)
        </h1>
      </div>
      <div className="md:flex md:space-x-10">
        {data.map((item) => {
          return <GradientCom item={item} />;
        })}
      </div>

      <div className="text-md md:text-2xl text-[#800080] mt-10">
        Terms & Conditions
      </div>
    </div>
  );
};
export default FriendWhoEnrolled;
