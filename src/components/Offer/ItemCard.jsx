import Buttons from "../Buttons";

function ItemCard({ offer }) {
  const getDetailValue = (key) => {
    const detail = offer.product_details?.find(
      (detail) => Object.keys(detail)[0] === key,
    );
    return detail ? detail[key] : "";
  };

  return (
    <div className="flex h-[600px] w-full flex-col justify-between bg-white p-10 lg:w-[460px]">
      {/* price and details */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">{offer.product_price}&nbsp;€</h1>
          <div className="flex justify-between gap-2 text-sm">
            <div className="text-gray-400">
              <p>MARQUE</p>
              <p>ÉTAT</p>
              <p>COULEUR</p>
              <p>EMPLACEMENT</p>
            </div>
            <div className="font-semibold text-gray-500">
              <p>{getDetailValue("MARQUE")}</p>
              <p>{getDetailValue("ÉTAT")}</p>
              <p>{getDetailValue("COULEUR")}</p>
              <p>{getDetailValue("EMPLACEMENT")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* title and description */}
      <div className="flex flex-col gap-4 border-t pb-4 pt-14">
        <h2 className="font-semibold">{offer.product_name}</h2>
        <p className="font-light text-gray-600">{offer.product_description}</p>
        <div className="flex items-center gap-2 font-light">
          <div className="w-12">
            <img
              src={offer.owner.account.avatar.secure_url}
              alt=""
              className="rounded-full"
            />
          </div>
          <span>{offer.owner.account.username}</span>
        </div>
      </div>
      {/* button */}
      <Buttons filled={true} text={"Acheter"} />
    </div>
  );
}

export default ItemCard;
