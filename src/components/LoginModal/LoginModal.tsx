import { useContext, useState } from "react";
import styles from "./style.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
interface IProps {
  clickLogin: boolean;
  setClickLogin: (bool: boolean) => void;
}
export default function LoginModal({ clickLogin, setClickLogin }: IProps) {
  const [value, setValue] = useState({
    login: "john@mail.com",
    password: "changeme",
    name: "",
  });
  const [success, setSuccess] = useState(false);
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
              placeholder="Email"
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
            {!success ? (
              <>
                <input
                  value={value.name}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                  className={styles.input}
                  type="text"
                  placeholder="Name"
                />
                <input
                  value={value.login}
                  onChange={(e) =>
                    setValue({ ...value, login: e.target.value })
                  }
                  className={styles.input}
                  type="text"
                  placeholder="Email"
                />
                <input
                  value={value.password}
                  onChange={(e) =>
                    setValue({ ...value, password: e.target.value })
                  }
                  className={styles.input}
                  type="text"
                  placeholder="Password"
                />

                <button
                  onClick={() => {
                    axios
                      .post("https://api.escuelajs.co/api/v1/users/", {
                        name: value.name,
                        email: value.login,
                        password: value.password,
                        avatar:
                          "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                      })
                      .then((resp) => {
                        console.log(resp);
                        if (resp.status == 201) {
                          setSuccess(true);
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                  className={styles.btn}
                >
                  Sign up
                </button>
              </>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <h2>You are registered!</h2>
                <img
                  style={{ width: 75 }}
                  src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
                  alt=""
                />
              </div>
            )}
            <button onClick={() => setTab("login")} className={styles.reg}>
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
