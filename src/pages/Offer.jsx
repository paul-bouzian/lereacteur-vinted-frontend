import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ItemCard from "../components/Offer/ItemCard";
import PicturesCarousel from "../components/Offer/PicturesCarousel";

function Offer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [offer, setOffer] = useState({});

  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}v2/offers/${id}`,
        );
        setOffer(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOffer();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="bg-gray-100 max-lg:pb-12 lg:h-full">
      <div className="m-auto flex max-w-6xl flex-col items-center justify-normal gap-8 px-4 pt-10 lg:flex-row lg:justify-between">
        {
          // PicturesCarousel
          offer.product_pictures?.length > 1 ? (
            <div className="h-[600px] w-[460px]">
              <PicturesCarousel pictures={offer.product_pictures} />
            </div>
          ) : (
            <div className="h-[600px] w-[460px]">
              <img
                src={offer.product_pictures?.[0]?.secure_url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          )
        }

        <ItemCard offer={offer} />
      </div>
    </main>
  );
}

export default Offer;
