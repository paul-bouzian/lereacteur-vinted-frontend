function ButtonRed({ filled, text, padding }) {
  return (
    <button
      className={`text-md truncate rounded border border-red-700 ${filled ? "bg-red-700 text-white hover:bg-white hover:text-red-700" : "text-red-700 hover:bg-red-700 hover:text-white"} ${padding ? "p-3" : "px-2 py-1"} `}
    >
      {text}
    </button>
  );
}

export default ButtonRed;
