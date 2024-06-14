import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers/Offers";
import PriceFilter from "../components/Home/PriceFilter";
import PriceSorting from "../components/Home/PriceSorting";
import Loading from "../components/Loading";

function Home({ search }) {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [page, setPage] = useState(1);
  const [prices, setPrices] = useState([0, 500]);
  const [sort, setSort] = useState(false);
  const limit = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}v2/offers?page=${page}&limit=${limit}&priceMin=${prices[0]}&priceMax=${prices[1]}&sort=${sort ? "price-desc" : "price-asc"}&title=${search}`,
        );
        console.log(response.data);
        setOffers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    setLoading(true);
    fetchData();
  }, [page, prices, sort, search]);

  return (
    <main className="pb-2">
      <Hero />

      <div className="m-auto mt-4 flex max-w-7xl gap-8 px-4">
        <PriceSorting sort={sort} setSort={setSort} />
        <PriceFilter prices={prices} setPrices={setPrices} />
      </div>
      {loading ? (
        <Loading />
      ) : (
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
