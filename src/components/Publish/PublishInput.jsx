function PublishInput({ label, value, setValue, placeholder, border }) {
  return (
    <div
      className={`flex w-full justify-center py-6 ${border && "border-b border-slate-300"}`}
    >
      <label className="flex-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="flex-1 rounded border-b border-slate-300 p-1 outline-none"
      />
    </div>
  );
}

export default PublishInput;
