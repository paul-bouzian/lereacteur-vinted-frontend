import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../Publish/FileUpload";

function Signup({ modal, setModal, setConnected }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayWrongCredentials, setDisplayWrongCredentials] = useState(false);
  const [avatar, setAvatar] = useState([]);

  const registerUser = (token) => {
    if (token) Cookies.set("token", token);
    setConnected(true);
    if (modal.navigate) {
      navigate(modal.navigate);
    }
    setModal({ show: false, navigate: null });
  };

  const connectRequest = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("newsletter", false);
    formData.append("avatar", avatar.length !== 0 ? avatar[0] : null);

    try {
      console.log(email, password);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}user/signup`,
        formData,
      );
      registerUser(response.data.token);
    } catch (error) {
      setDisplayWrongCredentials(true);
      console.error(error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-20">
      <h2 className="text-3xl">S'inscrire</h2>
      <form
        action=""
        className="flex w-full flex-col items-center gap-10 px-10 lg:w-4/5"
        onSubmit={(e) => {
          e.preventDefault();
          connectRequest();
        }}
      >
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="w-full rounded border-b border-red-100 p-4 outline-none"
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full rounded border-b border-red-100 p-4 outline-none"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full rounded border-b border-red-100 p-4 outline-none"
        />
        <FileUpload file={avatar} setFile={setAvatar} isSeveral={false} />
        {displayWrongCredentials && (
          <p className="text-red-500">Les champs ont été mal renseignés</p>
        )}
        <input
          type="submit"
          className={`text-md mt-6 w-full cursor-pointer truncate rounded border border-teal-700 bg-teal-700 p-2 text-white hover:bg-white hover:text-teal-700`}
          value={"S'inscrire"}
        />
      </form>
    </div>
  );
}

export default Signup;
