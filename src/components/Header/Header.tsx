import styles from "./style.module.css";
import Categories from "../Categories/Categories";
// import logo from "../../images/logo.png";
import cartImage from "../../images/Vector.svg";
import loginIcon from "../../images/login.png";
import LoginModal from "../LoginModal/LoginModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IContext, useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const [clickLogin, setClickLogin] = useState(false);
  const [lang, setLang] = useState("EN");
  const navigate = useNavigate();

  const { user, setToken, setUser } = useContext(AuthContext);
  const { dark, setDark, cart }: IContext = useTheme();

  const { i18n } = useTranslation();

  return (
    <header className={dark ? "dark" : ""}>
      <LoginModal clickLogin={clickLogin} setClickLogin={setClickLogin} />
      <div className={styles.header}>
        <div className="conteiner">
          <div className={styles.row}>
            <div onClick={() => navigate("/")} className={styles.logo}>
              {/* <img className={styles.img} src={logo} alt="" /> */}
              <p>Marketplace</p>
            </div>
            <div className={styles.block}>
              <div className={styles.cart}>
                <img
                  onClick={() => navigate("/basket")}
                  className={styles.cartImage}
                  src={cartImage}
                  alt=""
                />
                {cart.length > 0 && (
                  <div className={styles.count}>{cart.length}</div>
                )}
              </div>
              {user ? (
                <div className={styles.user}>
                  <img src={user.avatar} alt="" />
                  <div>
                    <p>{user.email}</p>
                    <button
                      onClick={() => {
                        setToken(null);
                        setUser(null);
                        localStorage.setItem("token", "null");
                      }}
                      className={styles.exit}
                    >
                      Exit
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  onClick={() => setClickLogin(!clickLogin)}
                  className={styles.login}
                  src={loginIcon}
                  alt=""
                />
              )}
              <button
                className={styles.lang}
                onClick={() => {
                  setLang(lang === "EN" ? "RU" : "EN");
                  i18n.changeLanguage(lang === "EN" ? "ru" : "en");
                }}
              >
                {lang}
              </button>
              <button onClick={() => setDark(!dark)}>Theme</button>
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </header>
  );
}
