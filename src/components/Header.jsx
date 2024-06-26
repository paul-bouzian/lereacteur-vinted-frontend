import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import ButtonClassic from "./Buttons/ButtonClassic";
import ButtonRed from "./Buttons/ButtonRed";
import Inputs from "./Inputs";

function Header({ setModal, connected, setConnected, search, setSearch }) {
  const navigate = useNavigate();

  const disconnect = () => {
    setConnected(false);
    Cookies.remove("token");
    navigate("/");
  };

  const navigateToPublish = () => {
    if (!connected) {
      setModal({ show: "login", navigate: "/publish" });
      return;
    }
    navigate("/publish");
  };

  return (
    <header className="w-full border-b border-slate-300 font-vinted">
      <section className="m-auto flex w-full max-w-7xl items-center justify-between gap-10 px-4 py-2">
        <Link to={"/"} className="h-[45px]">
          <img src={logo} alt="Logo" className="h-[45px]" />
        </Link>
        <div className="flex flex-1 items-center gap-2 rounded bg-gray-100 p-2 max-tablet:hidden">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          <Inputs
            placeholder="Recherche des articles..."
            value={search}
            setValue={setSearch}
          />
        </div>

        {connected ? (
          <div onClick={disconnect}>
            <ButtonRed filled={false} text={"Se déconnecter"} />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div
              onClick={() => {
                setModal({ show: "signup", navigate: null });
              }}
            >
              <ButtonClassic filled={false} text={"S'inscrire"} />
            </div>
            <div
              onClick={() => {
                setModal({ show: "login", navigate: null });
              }}
            >
              <ButtonClassic filled={false} text={"Se connecter"} />
            </div>
          </div>
        )}

        <div onClick={navigateToPublish}>
          <ButtonClassic filled={true} text={"Vends tes articles"} />
        </div>
      </section>
      <div className="mx-3 mb-3 flex items-center gap-2 rounded bg-gray-100 p-2 tablet:hidden">
        <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
        <Inputs
          placeholder="Recherche des articles..."
          value={search}
          setValue={setSearch}
        />
      </div>
    </header>
  );
}

export default Header;
