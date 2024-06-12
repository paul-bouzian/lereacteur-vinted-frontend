import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../components/Buttons";
import Loading from "../components/Loading";

function Offer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [offer, setOffer] = useState({});

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/offers/${id}`,
        );
        setOffer(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOffer();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const getDetailValue = (key) => {
    const detail = offer.product_details?.find(
      (detail) => Object.keys(detail)[0] === key,
    );
    return detail ? detail[key] : "";
  };

  return (
    <main className="bg-gray-100 max-lg:pb-12 lg:h-full">
      <div className="m-auto flex max-w-6xl flex-col items-center justify-normal gap-8 px-4 pt-10 lg:flex-row lg:justify-between">
        <div className="h-[600px] w-[460px]">
          <img
            src={offer.product_pictures?.[0]?.secure_url}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

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
            <p className="font-light text-gray-600">
              {offer.product_description}
            </p>
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
      </div>
    </main>
  );
}

export default Offer;
