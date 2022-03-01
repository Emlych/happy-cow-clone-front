import "./modal.css";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import whiteLogo from "../../assets/img/hc-logo-white.png";

const Modal = ({ toggleModal }) => {
  const [signupModal, setSignupModal] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handleSubmit = () => {
    if (signupModal) {
      alert("You want to create a new account !");
    } else {
      alert("You want to login !");
    }
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="close"
          onClick={() => {
            toggleModal();
            document.body.style.overflow = "scroll";
          }}
        >
          &times;
        </button>
        <div className="modal__image">
          <div className="modal__image--text">
            <img src={whiteLogo} alt="white logo of happy cow" />
            <div>
              Join the largest vegan and vegetarian community in the world.
            </div>
          </div>
        </div>
        <div className="modal__text">
          <nav>
            <button
              onClick={() => setSignupModal(false)}
              className={!signupModal ? "active-btn" : "disabled-btn"}
            >
              Login
            </button>
            <button
              onClick={() => setSignupModal(true)}
              className={signupModal ? "active-btn" : "disabled-btn"}
            >
              Sign Up
            </button>
          </nav>
          <div className="modal__network">
            <button>
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button>
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button>
              <FontAwesomeIcon icon={faApple} />
            </button>
          </div>
          <div className="modal__separation">
            <div className="line"></div>
            <span>OR</span>
          </div>

          {signupModal ? (
            <Signup
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              hiddenPassword={hiddenPassword}
              setHiddenPassword={setHiddenPassword}
            />
          ) : (
            <Login
              handleSubmit={handleSubmit}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              hiddenPassword={hiddenPassword}
              setHiddenPassword={setHiddenPassword}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
