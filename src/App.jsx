import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal/Modal";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const token = Cookies.get("token");
  const [modal, setModal] = useState(null);
  const [connected, setConnected] = useState(token ? true : false);

  useEffect(() => {
    if (modal !== null) {
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
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
        {modal && (
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
