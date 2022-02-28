import "./modal.css";
import { useState } from "react";
import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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
    alert("You pressed on the submit button !");
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
          <nav className="modal__type">
            <ul className="row-flex">
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
