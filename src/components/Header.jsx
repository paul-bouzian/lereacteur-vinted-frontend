import logo from "../assets/img/logo.svg";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Header() {
  return (
    <header className="font-vinted flex w-full justify-between border-b border-slate-300">
      <section className="m-auto flex w-full max-w-7xl items-center gap-10 px-4 py-2">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded bg-gray-100 p-2">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          <Inputs placeholder="Recherche des articles..." />
        </div>
        <div className="flex items-center gap-4">
          <Buttons filled={false} text={"S'inscrire"} />
          <Buttons filled={false} text={"Se connecter"} />
        </div>
        <Buttons filled={true} text={"Vends tes articles"} />
      </section>
    </header>
  );
}

export default Header;
