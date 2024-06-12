import Offer from "./Offer";

function Offers({ offers, count, limit, page, setPage }) {
  const numberOfPages = Math.ceil(count / limit);

  return (
    <section className="m-auto my-8 max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {offers.map((offer, index) => {
          return <Offer key={index} offer={offer} />;
        })}
      </div>
      <div className="mt-10 flex h-10 w-full items-center justify-center gap-1">
        {
          // pagination
          Array.from({ length: numberOfPages }, (_, index) => {
            return (
              <button
                key={index}
                className={`flex h-10 w-10 items-center justify-center rounded ${page === index + 1 ? "bg-slate-200" : "hover:bg-slate-100"}`}
                onClick={() => {
                  setPage(index + 1);
                }}
              >
                {index + 1}
              </button>
            );
          })
        }
      </div>
    </section>
  );
}

export default Offers;
