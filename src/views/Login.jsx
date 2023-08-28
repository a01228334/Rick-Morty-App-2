import {useState} from "react";
import {validar} from "../helpers";
import styles from './Detail.module.css';

function Login({login}) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "Email required", //
    password: "Password required", //
  });

  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validar({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function submitHandler(e) {
    e.preventDefault();

    login(userData);
  }

  function diseableHandler() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }

    return disabled;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>USERNAME</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="wubalubadubdub@flarg.com"
            className={styles.input}
          />
          <span className={styles.error}>{errors.email}</span>
        </div>
        <div className={styles.inputGroup}>
          <label>PASSWORD</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
            className={styles.input}
          />
          <span className={styles.error}>{errors.password}</span>
        </div>
        <button disabled={diseableHandler()} type="submit" className={styles.submitButton}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
