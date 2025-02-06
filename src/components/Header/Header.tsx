import styles from "./style.module.css";
import Categories from "../Categories/Categories";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className="conteiner">
          <div className={styles.row}>
            <div className={styles.logo}>
              <img className={styles.img} src={logo} alt="" />
              <p>Marketplace</p>
            </div>
            <img className={styles.cart} src={cart} alt="" />
          </div>
        </div>
      </div>
      <Categories />
    </header>
  );
}
