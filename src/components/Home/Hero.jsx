import hero from "../../assets/img/hero.jpeg";
import tear from "../../assets/img/tear.svg";
import ButtonClassic from "../Buttons/ButtonClassic";

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
            <ButtonClassic
              filled={true}
              text={"Vends maintenant"}
              padding={"8"}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2">
        <img src={tear} alt="" />
      </div>
    </div>
  );
}

export default Hero;
