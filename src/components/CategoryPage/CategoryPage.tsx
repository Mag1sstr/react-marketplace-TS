import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IProducts } from "../../interfaces/interfaces";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import NoProducts from "../NoProducts/NoProducts";
import { IContext, useTheme } from "../../contexts/ThemeContext";

export default function CategoryPage() {
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const { id } = useParams();

  const { dark }: IContext = useTheme();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((resp) => {
        setProducts(resp.data);
      });
  }, [id]);

  console.log(products);
  if (!products) {
    return <Spinner />;
  }
  if (products && !products.length) {
    return <NoProducts />;
  }

  return (
    <section className={`${styles.category} ${dark ? "dark" : ""}`}>
      <div className="conteiner">
        <h1 className={styles.name}>{products[0].category.name}</h1>
        <div className={styles.row}>
          {products?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
