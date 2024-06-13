import Login from "./Login";

function Modal() {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="w-2/5 min-w-96 rounded bg-white p-6 opacity-100">
        <Login />
      </div>
    </div>
  );
}

export default Modal;
