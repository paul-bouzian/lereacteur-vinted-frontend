import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Home/Hero";
import Offers from "../components/Home/Offers/Offers";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/v2/offers",
      );
      setOffers(response.data.offers);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Hero />
      {loading && <Loading />}
      {!loading && <Offers offers={offers} />}
    </main>
  );
}

export default Home;
