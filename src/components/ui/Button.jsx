
function Button({ text , icon, size}) {
  return (
    <button className={`flex items-center gap-2 relative bg-black text-gray-200 rounded-2xl py-1 px-3 overflow-hidden ${size? size: "text-sm"}`}>
      {icon}
      {text}
      <span className="absolute bg-gray-200 h-0.5 w-8 rounded-md top-1 left-1/2 tranform -translate-x-1/2"></span>
    </button>
  );
}

export default Button;
