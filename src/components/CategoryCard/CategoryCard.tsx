import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

interface IProps {
  name: string;
  image: string;
  id: number;
}

export default function CategoryCard({ name, image, id }: IProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/category/${id}`)} className={styles.card}>
      <div className={styles.circle}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div>
        <p className={styles.text}>{name}</p>
      </div>
    </div>
  );
}
