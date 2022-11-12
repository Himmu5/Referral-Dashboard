function Button({ children ,className }) {
  return <button className={"bg-[#800080] h-10 text-white py-2 rounded-md px-4 " + className   }>{children}</button>;
}
export default Button;
