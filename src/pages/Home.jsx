import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers/Offers";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}v2/offers?page=${page}&limit=${limit}`,
        );
        setOffers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    setLoading(true);
    fetchData();
  }, [page]);

  return (
    <main className="pb-2">
      <Hero />
      {loading && <Loading />}
      {!loading && (
        <Offers
          offers={offers.offers}
          count={offers.count}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </main>
  );
}

export default Home;
