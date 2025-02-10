import styles from "./style.module.css";
import Categories from "../Categories/Categories";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import loginIcon from "../../images/login.png";
import LoginModal from "../LoginModal/LoginModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [clickLogin, setClickLogin] = useState(false);
  const navigate = useNavigate();

  const { user, setToken, setUser } = useContext(AuthContext);

  return (
    <header>
      <LoginModal clickLogin={clickLogin} setClickLogin={setClickLogin} />
      <div className={styles.header}>
        <div className="conteiner">
          <div className={styles.row}>
            <div onClick={() => navigate("/")} className={styles.logo}>
              <img className={styles.img} src={logo} alt="" />
              <p>Marketplace</p>
            </div>
            <div className={styles.block}>
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
              <img className={styles.cart} src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </header>
  );
}
