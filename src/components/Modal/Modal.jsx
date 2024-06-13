import Login from "./Login";
import Signup from "./Signup";

function Modal({ modal, setModal, setConnected }) {
  return (
    <div className="absolute left-0 top-0 flex h-[105vh] w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="relative mb-10 w-2/5 min-w-96 rounded-lg bg-white p-6 opacity-100">
        {
          /* <Signup /> */ modal === "signup" && (
            <Signup setModal={setModal} setConnected={setConnected} />
          )
        }
        {
          /* <Login /> */ modal === "login" && (
            <Login setModal={setModal} setConnected={setConnected} />
          )
        }
        <i
          className="fa-solid fa-xmark absolute right-5 top-3 text-xl hover:cursor-pointer hover:text-gray-600"
          onClick={() => {
            setModal(null);
          }}
        ></i>
      </div>
    </div>
  );
}

export default Modal;
