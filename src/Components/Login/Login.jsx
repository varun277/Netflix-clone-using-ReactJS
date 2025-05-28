import "./Login.css";
import { useNavigate } from "react-router-dom";
import { CheckSquare } from "phosphor-react";
import { useRef } from "react";
import { NETFLIX_LOGO, AVATAR, USER_DETAIL } from "../../constants/constants";
import styles from "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  // Get user email and password from localstorage
  const userEmail = localStorage.getItem("emailData");
  const userPassword = localStorage.getItem("passwordData");

  // Store email and password on localstorage on submit
  const loginButtonSubmit = () => {
    if (
      username.current.value == USER_DETAIL.userName &&
      password.current.value == USER_DETAIL.password
    ) {
      localStorage.setItem("emailData", USER_DETAIL.userName);
      localStorage.setItem("passwordData", USER_DETAIL.password);
    }
  };

  // If user is logged
  return (
    <div className="login-page">
      <div className="left-icon">
        <img src={NETFLIX_LOGO} alt="Netflix" className="netflix-logo" />
      </div>
      {userEmail && userPassword ? (
        <div className="avatar" onClick={() => navigate("/home")}>
          <img src={AVATAR} alt="avatar" />
          <p>{USER_DETAIL.name}</p>
        </div>
      ) : (
        <>
          <div className="sign-in-container">
            <h1 className="signIn">Sign in</h1>
            <form onSubmit={loginButtonSubmit} className={styles.formStyle}>
              <input
                type="text"
                placeholder="Username"
                className="username-login"
                ref={username}
              />
              <input
                type="password"
                placeholder="password"
                ref={password}
                className="password-login"
              />
              <button className="login-btn">Log in</button>
            </form>
            <div className="sign-in-footer">
              <p className="remember-me">
                <CheckSquare size={15} />
                Remember me
              </p>
              <a className="need-help">Need help?</a>
            </div>
          </div>
          <div className="container-blur" />
        </>
      )}
    </div>
  );
};

export default Login;
