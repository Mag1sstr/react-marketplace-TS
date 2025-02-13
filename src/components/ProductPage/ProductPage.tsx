import styles from "./style.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICart, IProducts } from "../../interfaces/interfaces";
import Spinner from "../Spinner/Spinner";
import { IContext, useTheme } from "../../contexts/ThemeContext";

export default function ProductPage() {
  const [product, setProduct] = useState<IProducts | null>(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  }, []);
  // console.log(product);

  const { dark, setCart, cart }: IContext = useTheme();

  if (!product) {
    return <Spinner />;
  }
  return (
    <section className={`${styles.product} ${dark ? "dark" : ""}`}>
      <div className="conteiner">
        <h1>Product page</h1>
        <h2>
          {product?.title} | <span>{product?.price}$</span>
        </h2>
        <img src={product?.images[0]} style={{ width: 300 }} alt="" />
        <p>{product?.description}</p>
        <button
          onClick={() => {
            const arr: ICart[] = [...cart];
            arr.push({
              id: product.id,
              title: product.title,
              price: product.price,
              images: product.images,
              count: 1,
            });
            setCart(arr);
          }}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
