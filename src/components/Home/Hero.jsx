import hero from "../../assets/img/hero.jpeg";
import Buttons from "../Buttons";

function Hero() {
  return (
    <div className="relative h-[460px] w-full">
      <img src={hero} alt="hero" className="h-full w-full object-cover" />
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="m-auto mt-16 h-64 max-w-7xl px-4">
          <div className="flex h-full max-w-[385px] flex-col rounded bg-white p-8 shadow-md">
            <span className="flex-1 text-4xl font-light">
              Prêts à faire du tri dans vos placards ?
            </span>
            <Buttons filled={true} text={"Vends maintenant"} padding={"8"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
