function Buttons({ filled, text }) {
  return (
    <button
      className={`text-md rounded border border-teal-700 px-2 py-1 ${filled ? "bg-teal-700 text-white hover:bg-white hover:text-teal-700" : "text-teal-700 hover:bg-teal-700 hover:text-white"} `}
    >
      {text}
    </button>
  );
}

export default Buttons;
