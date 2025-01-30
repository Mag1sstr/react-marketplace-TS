import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProducts } from "../../interfaces/interfaces";
import Spinner from "../Spinner/Spinner";

export default function ProductPage() {
  const [product, setProduct] = useState<IProducts | null>(null);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  }, []);
  console.log(product);

  if (!product) {
    return <Spinner />;
  }
  return (
    <section>
      <div className="conteiner">
        <h1>Product page</h1>
        <h2>
          {product?.title} | <span>{product?.price}$</span>
        </h2>
        <img src={product?.images[0]} style={{ width: 300 }} alt="" />
        <p>{product?.description}</p>
      </div>
    </section>
  );
}
