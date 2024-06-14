function Inputs({ placeholder, value, setValue }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="h-6 w-full bg-gray-100 focus:border-transparent focus:outline-none"
    />
  );
}

export default Inputs;
