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
import axios from "axios";

const Modal = ({ toggleModal, setUser }) => {
  const [signupModal, setSignupModal] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const urlbase = "https://happy-cow-eld.herokuapp.com";
  //const urlbase = "http://localhost:4000";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (signupModal) {
      console.log("You want to create a new account !");
      const fetchData = async () => {
        try {
          if (!username || !email || !password) {
            setErrorMessage("Missing field(s)");
          } else {
            const response = await axios.post(`${urlbase}/user/signup`, {
              email: email,
              username: username,
              password: password,
            });
            console.log(response.data.newUser);
            if (response.data.newUser.token) {
              setUser(
                response.data.newUser.token,
                response.data.newUser.username
              );
              toggleModal();
            }
          }
        } catch (error) {
          console.log("error message ==>", error.message);
          console.log("error response ==>", error.response);
        }
      };
      fetchData();
    } else {
      console.log("You want to login !");
      const fetchData = async () => {
        try {
          const response = await axios.post(`${urlbase}/user/login`, {
            email: email,
            password: password,
          });
          console.log("response here ==>", response);
          if (response.data.searchedUser.token) {
            setUser(
              response.data.searchedUser.token,
              response.data.searchedUser.username
            );

            toggleModal();
          }
        } catch (error) {
          console.log("error message ==>", error.message);
          console.log("error response ==>", error.response);
        }
      };
      fetchData();
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
              errorMessage={errorMessage}
            />
          ) : (
            <Login
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              hiddenPassword={hiddenPassword}
              setHiddenPassword={setHiddenPassword}
              errorMessage={errorMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
