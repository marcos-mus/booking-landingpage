import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  const renderForm = (
    <div className="form">
      <form onClick={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" id="username" required onChange={handleChange} />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button disabled={loading} type="submit">
            Login
          </button>
        </div>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
};

export default Login;
