//RAF : ajout d'une page pour afficher les restaurants par ville

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

//import pages
import Home from "./Pages/Home";
import Review from "./Pages/Review";
import Profile from "./Pages/Profile";

//import components
import Header from "./Components/header/Header";
import Modal from "./Components/modal/Modal";
import Footer from "./Components/footer/Footer";

function App() {
  //Open-close modal
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(!isModal);
  };

  //Cookies, navigation and get user name
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [name, setName] = useState(Cookies.get("userNameToken") || null);
  const setUser = (token, name) => {
    token
      ? Cookies.set("userToken", token, { expires: 3 })
      : Cookies.remove("userToken");
    setToken(token);
    name
      ? Cookies.set("userNameToken", name, { expires: 3 })
      : Cookies.remove("userNameToken");
    setName(name);
  };
  return (
    <div className="app">
      <Router>
        <Header
          toggleModal={toggleModal}
          token={token}
          setUser={setUser}
          name={name}
        />
        {isModal ? <Modal toggleModal={toggleModal} setUser={setUser} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews/:index" element={<Review />} />
          <Route path="/members/profile" element={<Profile name={name} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
