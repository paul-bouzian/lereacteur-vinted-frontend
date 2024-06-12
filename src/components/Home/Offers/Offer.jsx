import { Link } from "react-router-dom";

function Offer({ offer }) {
  const marque = offer.product_details.find(
    (detail) => Object.keys(detail)[0] === "MARQUE",
  );

  const taille = offer.product_details.find(
    (detail) => Object.keys(detail)[0] === "TAILLE",
  );

  return (
    <Link
      to={`/offer/${offer._id}`}
      className="flex flex-col gap-2 transition-transform hover:scale-105 hover:cursor-pointer"
    >
      {/* user infos */}
      <div className="flex items-center gap-2">
        <img
          src={offer.owner.account.avatar.url}
          alt={offer.owner.account.username}
          className="h-[20px] w-[20px] rounded-full"
        />
        <span className="w-full truncate text-xs font-thin text-gray-500">
          {offer.owner.account.username}
        </span>
      </div>
      {/* images */}
      <div className="h-[320px]">
        <img
          src={offer.product_image.secure_url}
          alt="cover-image"
          className="h-full w-full object-cover"
        />
      </div>
      {/* price infos */}
      <div className="flex flex-col px-2 text-xs text-gray-400">
        <p className="text-sm text-black">{offer.product_price}&nbsp;€</p>
        <p>{taille ? taille.TAILLE : ""}</p>
        <p>{marque ? marque.MARQUE : ""}</p>
      </div>
    </Link>
  );
}

export default Offer;
