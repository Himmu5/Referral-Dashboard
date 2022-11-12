function Process({path ,ExtraClass , heading ,para }) {
  return (
    <div>
      <div className="flex gap-8 items-center mt-4">
        <div className={"bg-[#E5E5E5] rounded-full py-5 px-6 " + ExtraClass} >
          <img src={path} className={"h-7 " } alt="" />
        </div>
        <div className="w-80 ">
          <h1 className="font-bold"> {heading}</h1>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}
export default Process;
