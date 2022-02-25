import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages
import Header from "./Pages/header/Header";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

//import modal
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Modal />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Fiche restaurant -- :id à redéfinir au besoin */}
          <Route path="/reviews/:id" element={<Home />} />
          <Route path="/members/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
