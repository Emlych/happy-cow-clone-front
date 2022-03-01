//RAF : ajout d'une page pour afficher les restaurants par ville

import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import Home from "./Pages/Home";
import Review from "./Pages/Review";
import Profile from "./Pages/Profile";

//import components
import Header from "./Components/header/Header";
import Modal from "./Components/modal/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <div className="app">
      <Router>
        <Header toggleModal={toggleModal} />
        {isModal ? <Modal toggleModal={toggleModal} /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews/:index" element={<Review />} />
          <Route path="/members/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
