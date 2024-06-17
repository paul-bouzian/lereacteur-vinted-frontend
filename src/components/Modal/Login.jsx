import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ modal, setModal, setConnected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayWrongCredentials, setDisplayWrongCredentials] = useState(false);
  const navigate = useNavigate();

  const loginUser = (token) => {
    Cookies.set("token", token);
    setConnected(true);
    if (modal.navigate) {
      navigate(modal.navigate);
    }
    setModal({ show: false, navigate: null });
  };

  const loginRequest = async () => {
    try {
      console.log(email, password);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}user/login`,
        {
          email: email,
          password: password,
        },
      );
      console.log(response.data);
      loginUser(response.data.token);
    } catch (error) {
      setDisplayWrongCredentials(true);
      console.error(error);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-20">
      <h2 className="text-2xl">Se connecter</h2>
      <form
        action=""
        className="flex w-full flex-col items-center gap-10 px-10 lg:w-2/3"
        onSubmit={(e) => {
          e.preventDefault();
          loginRequest();
        }}
      >
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
        {displayWrongCredentials && (
          <p className="text-red-500">Email ou mot de passe incorrect</p>
        )}
        <input
          type="submit"
          className={`text-md mt-6 w-full cursor-pointer truncate rounded border border-teal-700 bg-teal-700 p-2 text-white hover:bg-white hover:text-teal-700`}
          value={"Se connecter"}
        />
      </form>
    </div>
  );
}

export default Login;
