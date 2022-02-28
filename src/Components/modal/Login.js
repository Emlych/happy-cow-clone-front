//Distinguer email de username en front ou en back?
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  hiddenPassword,
  setHiddenPassword,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Username or Email</label>
      <input
        type="text"
        name="usernameOrEmail"
        placeholder="Username or Email"
        required=""
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

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
      <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="checkbox">Remember me</label>
        <p>Forgot Password?</p>
      </div>

      <input type="submit" value="Login" className="primary btn submit" />
    </form>
  );
};

export default Login;
