import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal/Modal";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Payment from "./pages/Payment";
import Publish from "./pages/Publish";

function App() {
  const token = Cookies.get("token");
  const [modal, setModal] = useState({ show: false, navigate: null });
  const [connected, setConnected] = useState(token ? true : false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (modal.show === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [modal]);

  return (
    <div id="router">
      <Router>
        <Header
          setModal={setModal}
          connected={connected}
          setConnected={setConnected}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home search={search} connected={connected} setModal={setModal} />
            }
          />
          <Route path="/publish" element={<Publish />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/offer/:id"
            element={<Offer connected={connected} setModal={setModal} />}
          />
        </Routes>
        {modal.show && (
          <Modal
            modal={modal}
            setModal={setModal}
            setConnected={setConnected}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
