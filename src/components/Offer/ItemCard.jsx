import ButtonClassic from "../Buttons/ButtonClassic";

function ItemCard({ offer }) {
  return (
    <div className="flex h-[600px] w-full flex-col justify-between bg-white p-10 lg:w-[460px]">
      {/* price and details */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">{offer.product_price}&nbsp;€</h1>
          <div className="flex justify-between gap-2 text-sm">
            <div className="text-gray-400">
              {offer.product_details.map((detail, index) => {
                const key = Object.keys(detail)[0];
                return (
                  <p key={index} className="capitalize">
                    {key}
                  </p>
                );
              })}
            </div>
            <div className="font-semibold text-gray-500">
              {offer.product_details.map((detail, index) => {
                const key = Object.keys(detail)[0];
                return (
                  <p key={index} className="capitalize">
                    {detail[key]}
                  </p>
                );
              })}
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
              src={
                offer.owner.account.avatar
                  ? offer.owner.account.avatar.secure_url
                  : null
              }
              alt=""
              className="rounded-full"
            />
          </div>
          <span>{offer.owner.account.username}</span>
        </div>
      </div>
      {/* button */}
      <ButtonClassic filled={true} text={"Acheter"} />
    </div>
  );
}

export default ItemCard;
