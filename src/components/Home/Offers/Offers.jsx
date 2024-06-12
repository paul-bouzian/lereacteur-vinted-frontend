import Offer from "./Offer";

function Offers({ offers }) {
  return (
    <section className="m-auto my-8 grid max-w-7xl grid-cols-2 gap-x-3 gap-y-6 px-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {offers.map((offer, index) => {
        return <Offer key={index} offer={offer} />;
      })}
    </section>
  );
}

export default Offers;
