import styles from "./style.module.css";
import { useState } from "react";
import searchImg from "../../images/search.png";

export default function FindByPrice() {
  const [value, setValue] = useState({
    start: "",
    end: "",
  });
  return (
    <div>
      <div>
        <p style={{ fontWeight: 600 }}>Price:</p>
        <span>
          from{" "}
          <input
            value={value.start}
            onChange={(e) => setValue({ ...value, start: e.target.value })}
            className={styles.input}
            type="text"
          />{" "}
          to{" "}
          <input
            value={value.end}
            onChange={(e) => setValue({ ...value, end: e.target.value })}
            className={styles.input}
            type="text"
          />{" "}
          <button
            className={`${styles.btn} ${
              value.start.length && value.end.length ? styles.active : ""
            }`}
          >
            Find
          </button>
        </span>
      </div>
    </div>
  );
}
