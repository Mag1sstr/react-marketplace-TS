import { useEffect, useState } from "react";
import { IProducts } from "../../interfaces/interfaces";
import axios from "axios";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";

export default function MainPage() {
  const [data, setData] = useState<IProducts[] | null>(null);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((resp) => {
      setData(resp.data);
    });
  }, []);
  if (!data) {
    return <Spinner />;
  }
  return (
    <div className="main">
      <div className="conteiner">
        <Categories />
        <div className="row">
          {data &&
            data.slice(0, 12).map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  images={item.images}
                />
              );
            })}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
