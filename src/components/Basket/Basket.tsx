import { useTheme } from "../../contexts/ThemeContext";
import styles from "./style.module.css";

export default function Basket() {
  const { cart, setCart } = useTheme();
  const totalPrice = cart.reduce((acc, v) => (acc += v.price * v.count), 0);
  return (
    <section className={styles.basket}>
      <div className="conteiner">
        <h1 style={{ margin: "20px 0", fontSize: 32 }} className={styles.title}>
          Basket
        </h1>
        <div className={styles.column}>
          {cart.length ? (
            cart.map((item, index) => {
              return (
                <div className={`flex ${styles.product}`}>
                  <div className={styles.info}>
                    <img className={styles.img} src={item.images[0]} alt="" />
                    <p className={styles.title}>{item.title}</p>
                    <div className={styles.count}>
                      <button
                        onClick={() => {
                          const copy = [...cart];
                          copy[index].count > 1
                            ? (copy[index].count -= 1)
                            : null;
                          setCart(copy);
                        }}
                        className={styles.btn}
                      >
                        -
                      </button>
                      <p>{item.count}</p>
                      <button
                        onClick={() => {
                          const copy = [...cart];
                          copy[index].count += 1;
                          setCart(copy);
                        }}
                        className={styles.btn}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.flex}>
                    <p className={styles.price}>{item.price * item.count}$</p>
                    <button
                      onClick={() => {
                        setCart(cart.filter((c) => c.id !== item.id));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 style={{ fontFamily: "Inter" }}>Нет товара в корзине</h1>
          )}
        </div>
        {cart.length > 0 && (
          <div className={styles.total}>Total price: {totalPrice}$</div>
        )}
      </div>
    </section>
  );
}
