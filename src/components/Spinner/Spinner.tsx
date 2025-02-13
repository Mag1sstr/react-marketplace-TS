import styles from "./style.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.spinner}></span>
    </div>
  );
}
