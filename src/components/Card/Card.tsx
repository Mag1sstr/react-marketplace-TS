import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

interface IProps {
  id: number;
  title: string;
  price: number;
  images: string[] | string;
}

export default function Card({ title, price, images, id }: IProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${id}`)} className={styles.card}>
      <div className={styles.column}>
        <img className={styles.image} src={images[0]} alt="" />
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}$</p>
      </div>
    </div>
  );
}
