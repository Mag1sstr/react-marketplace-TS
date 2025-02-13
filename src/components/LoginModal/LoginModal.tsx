import { useContext, useState } from "react";
import styles from "./style.module.css";
import { AuthContext } from "../../contexts/AuthContext";
interface IProps {
  clickLogin: boolean;
  setClickLogin: (bool: boolean) => void;
}
export default function LoginModal({ clickLogin, setClickLogin }: IProps) {
  const [value, setValue] = useState({
    login: "john@mail.com",
    password: "changeme",
  });
  const [tab, setTab] = useState("login");
  const { signIn, error } = useContext(AuthContext);

  return (
    <div
      onClick={() => setClickLogin(false)}
      className={`${styles.modal} ${clickLogin ? styles.active : null}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.form}>
        {tab === "login" && (
          <div className={styles.inner}>
            <h2 className={styles.title}>Login</h2>
            {error ? (
              <p style={{ color: "red" }}>Incorrect username or password</p>
            ) : null}
            <input
              value={value.login}
              onChange={(e) => setValue({ ...value, login: e.target.value })}
              className={styles.input}
              type="text"
              placeholder="Login"
            />
            <input
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              className={styles.input}
              type="text"
              placeholder="Password"
            />
            <button
              onClick={() => signIn(value.login, value.password)}
              className={styles.btn}
            >
              Sign in
            </button>

            <button onClick={() => setTab("register")} className={styles.reg}>
              Sign up
            </button>
          </div>
        )}
        {tab === "register" && (
          <div className={styles.inner}>
            <h2>Registration</h2>

            <button className={styles.btn}>Sign up</button>
            <button onClick={() => setTab("login")} className={styles.reg}>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
