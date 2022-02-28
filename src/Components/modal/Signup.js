import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SignUp = ({
  handleSubmit,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  hiddenPassword,
  setHiddenPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required=""
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        required=""
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <p>
        Publicly displayed. Do not user your email address as your username.
      </p>
      <label htmlFor="password">Password</label>
      <div className="password">
        <FontAwesomeIcon
          icon={faEye}
          className="icon-eye"
          onClick={() => setHiddenPassword(!hiddenPassword)}
        />
        <input
          type={hiddenPassword ? "password" : "text"}
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <input type="submit" value="Next" className="primary btn submit" />
    </form>
  );
};

export default SignUp;
